
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../../contexts/ThemeContext";
import Background from "../components/Background";
import ProfilePart from "../Desktop/components/ProfilePart";
import MainPart from "../Desktop/components/MainPart";


const MobileHero = () => {
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

    <motion.section id="home" initial="hidden" className={`md:hidden pt-20 pb-0  ${isDarkMode ? "text-gray-50  bg-gray-900" : "text-gray-950 bg-gray-50"}`}
      animate="visible" style={{ y: heroY }} >
      <Background/>
      <ProfilePart />
      <MainPart scrollToSection={scrollToSection} />
      {/* <ScrollIndicator/> */}

    </motion.section>

  )
}

export default MobileHero