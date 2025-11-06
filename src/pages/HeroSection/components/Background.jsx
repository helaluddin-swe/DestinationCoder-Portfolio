

import { motion } from 'framer-motion'
import { useTheme } from '../../../contexts/ThemeContext'

const Background = () => {
    const { isDarkMode } = useTheme()
    return (
        <div className='absolute inset-0 -z-10'>
            <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }} transition={{ repeat: Infinity, duration: 20, ease: "easeOut" }} className={`w-64 h-64 top-20 right-20 absolute rounded-full blur-3xl ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}>

            </motion.div >
            <motion.div animate={{ scale: [1.1, 1.1, 1], rotate: [360, 180, 0] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className={`w-48 h-48 bottom-20 left-20 absolute   rounded-full blur-3xl ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`}>

            </motion.div >

        </div>
    )
}

export default Background
