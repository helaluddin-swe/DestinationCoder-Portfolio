import { motion } from "framer-motion"
import { skillCategory, } from "../../../utils/data"
import { containerVarients, itemVariants, skillVariants } from "../../../utils/HeroData"
import { useTheme } from "../../../contexts/ThemeContext"



const SkillGrid = ({ isInView }) => {
    const { isDarkMode } = useTheme()
    return (
        <motion.div initial="hidden" variants={containerVarients} className="grid md:grid-cols-2 gap-4 lg:gap-12" animate={isInView ? "visible" : "hidden"}>
            {skillCategory.map((skill) => (
                <motion.div key={skill.title} variants={itemVariants} className={`p-8 rounded-2xl border  mb-6 ${isDarkMode ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm " : "bg-white/80 border-gray-200 backdrop-blur-sm"}`}>
                    {/* category header */}
                    <div className="flex items-center mb-6 ">
                        <div className={` p-3 rounded-xl mr-4 ${isDarkMode ? " bg-gray-800" : "bg-gray-200"}`}>
                            <skill.icon size={18} className="text-blue-500"/>

                        </div>
                        <div className="font-medium text-xl mb-1"><h3>{skill.title}</h3>
                            <p className={`text-sm ${isDarkMode ? "text-gray=400" : "text-gray-600"}`}>{skill.description}</p>
                        </div>
                    </div>
                    {/* skill list */}
                    <div className="space-y-4">
                        {skill.skills.map((item ) => (
                            <div className="group" key={item.name}> <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium">{item.name}</span>
                                <span className={`text-xs ${isDarkMode ? " text-gray-500" : "text-gray-600"}`}>{item.level}%</span>
                            </div>
                                {/*  */}
                                <div className={` rounded-full h-2  overflow-hidden ${isDarkMode ? "text-gray-800" : "text-gray-200"}`}>
                                    <motion.div className={`h-full rounded-full relative ${item.color} `}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        variants={skillVariants} custom={item.level}>
                                        <div className="absolulte inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80  " />

                                    </motion.div>
                                </div>

                            </div>

                        ))}
                    </div>

                </motion.div>


            ))}


        </motion.div>
    )
}

export default SkillGrid
