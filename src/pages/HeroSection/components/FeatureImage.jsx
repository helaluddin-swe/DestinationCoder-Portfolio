import React from 'react'
import { useTheme } from '../../../../contexts/ThemeContext'
import { motion } from "framer-motion"
import { imageVariants } from '../../../../utils/HeroData'
import Profile_1 from "../../../../images/helal9.jpg"
const FeatureImage = () => {
    const { isDarkMode } = useTheme()
    return (
        <>
            <motion.div className=" col-start-1 col-end-7 top-20 md:col-start-4 md:col-end-7" variants={imageVariants}>
                <div className=' '>
                    <motion.div whileHover={{ scale: 1.05 }} className={`h-80 w-full md:h-80 md:w-1/2  rounded-2xl overflow-hidden border-4 ${isDarkMode ? "border-gray-700" : "border-gray-600"}shadow-2xl items-center md:ml-24 md:mt-8 `}>
                        <img src={Profile_1} alt="profile photo" className=" " />

                    </motion.div>
                    {/* decorative ring */}
                    <motion.div animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="" >

                    </motion.div>
                </div>

            </motion.div>
        </>
    )
}

export default FeatureImage
