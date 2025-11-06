import { useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import BackgroundSkill from "./components/BackgroundSkill"
import SkillHeader from "./components/SkillHeader"
import SkillGrid from "./components/SkillGrid"
import AdditionalSkill from "./components/AdditionalSkill"
import SkillStats from "./components/SkillStats"



const SkillSection = () => {
    const { isDarkMode } = useTheme()
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    return (
        <section ref={sectionRef} id="skills" className={`pt-16  px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-950"} relative overflow-hidden `}>
            {/* background */}
            <BackgroundSkill y={y} />
            <div className="max-w-6xl mx-auto relative z-10">
                <SkillHeader isInView={isInView} />
                {/* skill grids */}
                <SkillGrid isInView={isInView} />
                <AdditionalSkill isInView={isInView} />
                <SkillStats />

            </div>

        </section>
    )
}

export default SkillSection
