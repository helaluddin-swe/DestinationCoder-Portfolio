
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { MapPin, Send, Facebook, Github, Linkedin, Twitter } from "lucide-react";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const journeyData = [
    { year: "2021", title: "Started Learning Web Development", location: "Dhaka, Bangladesh" },
    { year: "2022", title: "Began Building MERN Projects", location: "Remote" },
    { year: "2023", title: "Frontend Developer Internship", location: "Tech Agency, BD" },
    { year: "2024", title: "Worked on AI-based SaaS & Fullstack Apps", location: "Freelance" },
    { year: "2025", title: "Aiming to Join as Software Engineer", location: "Global" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="about"
      className={`pb-24 text-center px-6 md:px-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-blue-600"
      >
        Know About Me
      </motion.h2>

      {/* About + Journey Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-xl p-6 text-left shadow-md border transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">About Me</h3>
          <p className="leading-relaxed">
            Hi, I'm <span className="font-semibold text-blue-600">Helal Uddin</span> — a passionate Full Stack Developer
            specialized in building scalable web apps using <strong>MERN Stack</strong> and modern frameworks like
            Next.js. I love solving real-world problems, optimizing performance, and crafting visually clean UIs.
          </p>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`rounded-xl p-6 text-left shadow-md border transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Journey of Development</h3>
          <ul className="space-y-4">
            {journeyData.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`pl-4 border-l-4 border-blue-600 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p className="text-sm text-gray-400">{item.year}</p>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm flex items-center gap-1">
                  <MapPin size={14} /> {item.location}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-8 text-blue-600"
      >
        Contact Me for Hire
      </motion.h3>

      <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-6 rounded-xl shadow-md border transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={`w-full px-4 py-2 rounded-md border bg-transparent outline-none transition-colors duration-300 ${
                isDarkMode
                  ? "border-gray-600 text-gray-200"
                  : "border-gray-300 text-gray-800"
              }`}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={`w-full px-4 py-2 rounded-md border bg-transparent outline-none transition-colors duration-300 ${
                isDarkMode
                  ? "border-gray-600 text-gray-200"
                  : "border-gray-300 text-gray-800"
              }`}
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className={`w-full px-4 py-2 h-28 rounded-md border bg-transparent outline-none transition-colors duration-300 ${
                isDarkMode
                  ? "border-gray-600 text-gray-200"
                  : "border-gray-300 text-gray-800"
              }`}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-700 transition"
          >
            <Send size={18} /> Send Message
          </button>

          {isSent && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 mt-4 text-sm"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-6 rounded-xl shadow-md border flex flex-col justify-center items-center gap-6 transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <p className="text-lg mb-2 font-semibold text-blue-500">Connect with me</p>
          <div className="flex gap-6 text-2xl">
            <a href="https://github.com/" target="_blank" className="hover:text-blue-600">
              <Github />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-600">
              <Linkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-blue-600">
              <Twitter />
            </a>
            <a href="https://facebook.com/" target="_blank" className="hover:text-blue-600">
              <Facebook />
            </a>
          </div>
        </motion.div>
      </div>

      {/* CTA + Back to Top */}
      <div className="space-y-4">
        <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Let’s Work Together 🚀
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block mx-auto text-blue-600 underline text-sm hover:text-blue-800"
        >
          Back to Top ↑
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
