import { motion } from "framer-motion"
import { useTheme } from "../../../../contexts/ThemeContext"
import { itemVariants, textVariants } from "../../../../utils/HeroData"
import { SocialLinks } from "../../../../utils/data"
import CTABtn from "../../components/CTABtn"


const MainPart = ({ scrollToSection }) => {
    const { isDarkMode } = useTheme()
    return (
        <motion.div className="text-left px-8 py-10  items-center justify-center" variants={itemVariants}>
            <motion.div variants={textVariants} >
                Full Stak Developer
            </motion.div>
            <motion.h1 className="text-5xl xl:7xl font-light mb-8 leading-tight">
                <span> Building Digital </span>
                <span className="text-blue-500"> Experience</span>
                <span> that matter</span>


            </motion.h1>
            <p className="mb-8">   I Craft functional ,beautiful web application with modern technology and thoughtful user Experience.</p>
          
          
            
            <motion.div className="flex space-x-6 mb-8">
                {SocialLinks.map((social, i) => (
                    <motion.a whileHover={{ scale: 1.1, y: -3 }} className={`px-3 rounded-full ${isDarkMode ? "text-gray-400" : "text-gray-600"}`} key={i} href={social.href} >
                        <social.icon size={20} />
                    </motion.a>
                ))}

            </motion.div >
            <motion.div className="mb-8" initial="hidden" animate="visible" variants={itemVariants}>
              
            <CTABtn scrollToDestination={scrollToSection} />
            
            </motion.div>


        </motion.div>
    )
}

export default MainPart
