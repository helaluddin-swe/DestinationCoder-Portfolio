import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CreateResume from "./Resume";


export default function HtmlToPdf() {
    const pdfRef = useRef();
    const [loading, setLoading] = useState(false);

    const downloadPDF = async () => {
        const element = pdfRef.current;
        if (!element) return alert("Nothing to download!");

        try {
            setLoading(true);

            // Apply .printable class to force concrete colors and strip oklch()
            element.classList.add("printable");
            // Wait for styles to compute
            await new Promise(r => setTimeout(r, 100));

            // Inline computed color styles to avoid unsupported color functions
            // (e.g. `oklch()`) being read by html2canvas. We'll restore styles after capture.
            // Convert any `oklch(...)` occurrences to `rgb(...)`/`rgba(...)` so html2canvas can parse them.
            const convertOklchInString = (str) => {
                if (!str || typeof str !== "string") return str;
                return str.replace(/oklch\(([^)]+)\)/gi, (_, inner) => {
                    try {
                        const toRgb = (L_in, C_in, h_in, a = 1) => {
                            // convert L from percentage to 0..1 if needed
                            let L = L_in;
                            if (typeof L === 'string' && L.endsWith('%')) L = parseFloat(L) / 100;
                            if (typeof L === 'number' && L > 1) L = L / 100;

                            const C = parseFloat(C_in);
                            let hue = h_in;
                            if (typeof hue === 'string' && hue.endsWith('deg')) hue = parseFloat(hue) * (Math.PI / 180);
                            else if (typeof hue === 'string' && hue.endsWith('rad')) hue = parseFloat(hue);
                            else if (typeof hue === 'string' && hue.endsWith('turn')) hue = parseFloat(hue) * 2 * Math.PI;
                            else hue = parseFloat(hue) * (Math.PI / 180);

                            // Oklch -> Oklab
                            const a_ = Math.cos(hue) * C;
                            const b_ = Math.sin(hue) * C;

                            // Oklab -> linear sRGB via intermediate
                            const L_ = L;

                            const l = L_ + 0.3963377774 * a_ + 0.2158037573 * b_;
                            const m = L_ - 0.1055613458 * a_ - 0.0638541728 * b_;
                            const s = L_ - 0.0894841775 * a_ - 1.2914855480 * b_;

                            const l3 = l * l * l;
                            const m3 = m * m * m;
                            const s3 = s * s * s;

                            let R = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
                            let G = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
                            let B = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;

                            const toSRGB = (v) => {
                                // clamp small negatives
                                v = Math.max(0, v);
                                // linear -> sRGB companding
                                if (v <= 0.0031308) return Math.round((v * 12.92) * 255);
                                return Math.round(((1.055 * Math.pow(v, 1 / 2.4)) - 0.055) * 255);
                            };

                            R = toSRGB(R);
                            G = toSRGB(G);
                            B = toSRGB(B);

                            if (typeof a === 'string') {
                                // alpha might be percent
                                if (a.trim().endsWith('%')) a = parseFloat(a) / 100;
                                else a = parseFloat(a);
                            }

                            a = a == null || Number.isNaN(Number(a)) ? 1 : Number(a);

                            return a >= 1 ? `rgb(${R}, ${G}, ${B})` : `rgba(${R}, ${G}, ${B}, ${a})`;
                        };

                        // inner may include an alpha separated by a slash
                        const parts = inner.split('/').map(s => s.trim());
                        const main = parts[0];
                        const alpha = parts[1];

                        const tokens = main.split(/\s+/).filter(Boolean);
                        const L = tokens[0];
                        const C = tokens[1] || '0';
                        const H = tokens[2] || '0deg';

                        return toRgb(L, C, H, alpha);
                    } catch (e) {
                        // if conversion fails, leave original text
                        console.warn('Failed to convert oklch color:', inner, e);
                        return `oklch(${inner})`;
                    }
                });
            };

            const inlineComputedColors = (root) => {
                const cssColorProps = [
                    "color",
                    "background-color",
                    "border-top-color",
                    "border-right-color",
                    "border-bottom-color",
                    "border-left-color",
                    "outline-color",
                    "box-shadow",
                    "text-shadow",
                ];

                const cssFontProps = [
                    "font-family",
                    "font-size",
                    "font-weight",
                    "font-style",
                    "line-height",
                    "letter-spacing",
                    "text-decoration",
                    "text-align",
                    "-webkit-font-smoothing",
                ];

                const elems = [root, ...Array.from(root.querySelectorAll("*"))];
                const original = new Map();

                elems.forEach((el) => {
                    // Save existing inline style string so we can restore it exactly
                    original.set(el, el.getAttribute("style"));

                    const comp = window.getComputedStyle(el);

                    // Ensure element is visible and has white background
                    el.style.setProperty("visibility", "visible");
                    el.style.setProperty("display", getComputedStyle(el).display);

                    // Inline color properties
                    cssColorProps.forEach((prop) => {
                        let value = comp.getPropertyValue(prop);
                        if (value) {
                            // convert any oklch() occurrences to rgb/rgba
                            value = convertOklchInString(value);
                            el.style.setProperty(prop, value);
                        }
                    });

                    // Inline font properties to ensure fonts render in PDF
                    cssFontProps.forEach((prop) => {
                        let value = comp.getPropertyValue(prop);
                        if (value) {
                            el.style.setProperty(prop, value);
                        }
                    });
                });

                return original;
            };

            const restoreInlineStyles = (map) => {
                map.forEach((styleString, el) => {
                    if (styleString === null) el.removeAttribute("style");
                    else el.setAttribute("style", styleString);
                });
            };

            const originalStyles = inlineComputedColors(element);

            // Capture the entire element as a single canvas
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false,
                backgroundColor: "#ffffff",
                imageTimeout: 0,
                canvasWidth: element.scrollWidth,
                canvasHeight: element.scrollHeight,
            });

            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            // Calculate the image height in PDF units (mm)
            // Fit all content on exactly 2 pages
            const imgProps = {
                width: canvas.width,
                height: canvas.height,
            };

            const totalPdfHeight = pdfHeight * 2; // 2 pages
            const imgHeightInPdf = Math.min(
                (imgProps.height * pdfWidth) / imgProps.width,
                totalPdfHeight * 0.95 // leave 5% margin
            );

            // Add first page
            let remainingHeight = imgHeightInPdf;
            let position = 0; // position in mm for drawing the image

            // Add image and then add pages as needed by shifting the image up
            pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeightInPdf);
            remainingHeight -= pdfHeight;

            while (remainingHeight > 0) {
                position -= pdfHeight; // move the image up by one page height
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeightInPdf);
                remainingHeight -= pdfHeight;
            }

            pdf.save("Resume.pdf");

            // restore original inline styles
            restoreInlineStyles(originalStyles);
            // Remove .printable class after export
            element.classList.remove("printable");
        } catch (err) {
            console.error("PDF generation failed:", err);
            alert("Failed to generate PDF. See console for details.");
            element.classList.remove("printable");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-5">
            <div ref={pdfRef}>
                <CreateResume />
            </div>

            <button
                onClick={downloadPDF}
                disabled={loading}
                className={`mt-5 px-5 py-2 rounded-md transition-colors ${loading ? "bg-gray-400 text-gray-800 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
            >
                {loading ? "Preparing PDF..." : "Download Resume as PDF"}
            </button>
        </div>
    );
}
