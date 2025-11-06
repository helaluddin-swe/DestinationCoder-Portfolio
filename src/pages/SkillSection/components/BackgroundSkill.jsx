import { motion } from "framer-motion"
import { useTheme } from "../../../contexts/ThemeContext"


const BackgroundSkill = ({ y }) => {
    const { isDarkMode } = useTheme()
    return (
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
            <div className={`absolute bottom-10 right-3/4 w-72 h-72 rounded-full animate-pulse blur-3xl ${isDarkMode?"bg-purple-600":"bg-purple-400"}`} />


            <div className={`absolute top-10 left-3/4 w-64 h-64  animate-pulse rounded-full blur-3xl ${isDarkMode ? " bg-blue-500" : "bg-blue-400"} `} />


        </motion.div>
    )
}

export default BackgroundSkill
