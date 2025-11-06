import { motion } from "framer-motion"
import { useTheme } from "../../../../contexts/ThemeContext"
import { imageVariants } from "../../../../utils/HeroData"
import { Profile } from "../../../../utils/data"


const ProfilePart = () => {
    const { isDarkMode } = useTheme()
    return (
        <motion.div className="flex  justify-center lg:justify-center py-24  ">
            <div className="relative">
                {/* tech stack */}
                <motion.div className="flex -top-8 items-center absolute uppercase  space-x-8">
                    <span className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}> React</span>
                    <span className={`${isDarkMode ? "text-gray-400" : "text-gray-800"} font-bold text-4xl`}> &bull;</span>
                    <span className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}> Nextjs</span>
                    <span className={`${isDarkMode ? "text-gray-400" : "text-gray-800"} font-bold text-4xl`}>  &bull;</span>
                    <span className={`${isDarkMode ? "text-gray-400" : "text-gray-800"}`}> Nodejs</span>


                </motion.div>
                <motion.div variants={imageVariants} className="w-[100%] h-90 md:w-80 md:h-96 overflow-hidden rounded-2xl shadow-md ">
                    <img src={Profile.url} className="h-90 w-[100%] md:w-full md:h-full object-cover " />
                </motion.div>
                {/* circle */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 border border-blue-500/20 ">

                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolulte -inset-8 border-2 border-purple-500/20 ">

                </motion.div>

            </div>

        </motion.div>
    )
}

export default ProfilePart
