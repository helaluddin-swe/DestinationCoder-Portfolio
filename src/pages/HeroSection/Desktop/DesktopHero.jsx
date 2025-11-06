import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "../../../contexts/ThemeContext"
import { containerVarients } from "../../../utils/HeroData"
import MainPart from "./components/MainPart"
import Background from "../components/Background"
import ProfilePart from "./components/ProfilePart"
import BackgroundSkill from "../../SkillSection/components/BackgroundSkill"



const DesktopHero = () => {
    const { isDarkMode } = useTheme()
    const { scrollY } = useScroll() // Corrected: useScroll 
    const heroY = useTransform(scrollY, [0, 500], [0, -100])
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })

        }
    }

    return (
        <motion.div id="home" className={` hidden   md:pt-24 md:grid md:grid-cols-2 ${isDarkMode ? "text-gray-50  bg-gray-900" : "text-gray-950 bg-gray-50"} `} initial="hidden" animate="visible" variants={containerVarients} style={{ y: heroY }} >
            {/* main part left */}
            {/* <Background /> */}
            <BackgroundSkill/>

            <MainPart scrollToSection={scrollToSection} />
            {/* right colum for profile image */}
            <ProfilePart />



        </motion.div>

    )
}

export default DesktopHero
