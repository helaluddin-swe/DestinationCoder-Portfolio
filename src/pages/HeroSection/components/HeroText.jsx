import React from 'react'
import { useTheme } from '../../../../contexts/ThemeContext'
import { motion } from "framer-motion"
import { itemVariants, textVariants } from '../../../../utils/HeroData'

const HeroText = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className='col-start-1 col-end-7 px-4 md:col-start-1 md:col-end-3 mt-4'>
            <motion.div variants={textVariants} className={`text-am uppercase ${isDarkMode ? "text-gray-500" : "text-gray-600"}mb-4 col-start-1 col-end-3 font-bold text-2xl md:text-4xl `}> Full Stack Developer



            </motion.div>
            <motion.h1 variants={itemVariants} className=" ">
                <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Building Digital
                </span>
                <span className=" "> Experience</span>
                <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}> that matter</span>

            </motion.h1>
            <motion.p className={` ${isDarkMode ? "text-gray-400 " : "text-gray-600 "}mb-8 mx-auto font-light leading-relaxed text-xl`}>
                I Craft functional ,beautiful web application with modern technology and thoughtful user Experience.

            </motion.p>

        </div>
    )
}

export default HeroText
