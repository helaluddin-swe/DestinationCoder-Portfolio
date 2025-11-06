import { motion, useTime } from "framer-motion"
import { containerVarients, itemVariants } from "../../../utils/HeroData"
import { useTheme } from "../../../contexts/ThemeContext"


const SkillHeader = ({ isInView }) => {
    const {isDarkMode}=useTheme()
    return (
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVarients} className=" text-center mb-8">
            <motion.div className={`${isDarkMode? "text-gray-500":"text-gray-600"} mb-4`} variants={itemVariants}>
                Technical Expertise
            </motion.div>
            <motion.h2 className="text-2xl md:text-4xl font-light text-blue-500 mb-4" variants={itemVariants}>
                Skill and  <span > Technologies</span>
                
            </motion.h2>
            <motion.p variants={itemVariants} className={`${isDarkMode?"text-gray-400":"text-gray-600"} text-lg max-w-2xl text-center mx-auto`}>
                A Comprehensive toolkit for buildings modren,scalable website for consept to developed.
            </motion.p>


        </motion.div>
    )
}

export default SkillHeader
