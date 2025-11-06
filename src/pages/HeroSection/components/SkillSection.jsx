import { motion } from "framer-motion"
import { itemVariants } from '../../../../utils/HeroData'
import { useTheme } from '../../../../contexts/ThemeContext'

const SkillSection = () => {
  const { isDarkMode } = useTheme()
  const skills = ["React", "Nextjs", "Nodejs", "MongoDB", "SEO"]
  return (
    <motion.div variants={itemVariants} className=" col-start-1 col-end-7 md:col-start-1 md:col-end-7 px-3 py-3 text-xl md:text-3xl font-bold   text-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
      {skills.map((skill, index) => (
        <div className={`  ${isDarkMode ? "text-white bg-gradient-to-br from-blue-500 to-purple-200 " : "text-gray-700 bg-gradient-to-br from-purple-300 to-blue-500"}rounded-4xl md:rounded-2xl   `} key={index}>
         <span className="  text-xl py-2 m-2  justify-center shadow-2xl md:justify-center items-center  cursor-pointer flex">{skill}</span> 

        </div>
      ))}</div>


    </motion.div>
  )
}

export default SkillSection
