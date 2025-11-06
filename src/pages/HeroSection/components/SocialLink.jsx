import { motion } from "framer-motion"
import { useTheme } from "../../../../contexts/ThemeContext"
import { itemVariants } from "../../../../utils/HeroData"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { Mail } from "lucide-react"
import { SocialLinks } from "../../../../utils/data"


const SocialLink = () => {
    const { isDarkMode } = useTheme()
   
    return (
        <>
            <motion.div variants={itemVariants} className=" col-start-5 justify-between col-end-7 md:col-start-4  text-center items-center md:col-end-7 ">
                <div className="  "> 
                {SocialLinks.map((social, index) => (
                    <motion.a whileHover={{ scale: 1.1, y: -3 }} href={social.href} key={index} className={`px-3 rounded-full ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        <social.icon size={20} />

                    </motion.a>
                ))}</div>

            </motion.div>

        </>
    )
}

export default SocialLink
