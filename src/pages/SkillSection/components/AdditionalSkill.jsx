import React from 'react'

import { motion } from "framer-motion"
import { useTheme } from '../../../contexts/ThemeContext'
import { fullStackDevSkills } from '../../../utils/data'


const AdditionalSkill = () => {
    const { isDarkMode } = useTheme()
    return (
        <motion.div className='mb-8' >
            <motion.div className='mb-8 '>
                <h3 className='text-center font-light text-3xl md:text-5xl '>Also Working With</h3>
            </motion.div>
            <motion.div className='flex flex-wrap justify-center gap-3 '>
                {fullStackDevSkills.map((item, index) => (
                    <motion.span className={`px-4 py-2  items-center border ${isDarkMode?"border-gray-50 hover:bg-gray-900 text-white bg-gray-400/20":""} rounded-full hover:bg-gray-200 cursor-pointer`}  key={index}>
                        {item}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default AdditionalSkill
