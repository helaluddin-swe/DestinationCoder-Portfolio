import { motion } from "framer-motion"

import { useTheme } from "../../../contexts/ThemeContext"



const CTABtn = ({ scrollToDestination }) => {

    const { isDarkMode } = useTheme()
    return (
        <div className="relative flex mt-8 gap-4">
            <motion.button className={`rounded-full font-medium uppercase  text-sm ${isDarkMode ? "border-gray-700 hover:bg-blue-500  border-2" : "border-gray-300 border-2 hover:bg-gray-300"
                } px-3 py-3 tracking-wider `}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToDestination("work")}
            >
                View Work
            </motion.button>

            <motion.button className={`px-3  py-3 ${isDarkMode ? "border-gray-700 border-2 hover:bg-violet-400" : "border-gray-300 border-2 hover:bg-gray-400"
                } rounded-full font-medium uppercase text-sm tracking-wider`}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToDestination("contact")}
            >
                Get in Touch
            </motion.button>
        </div>

    )
}

export default CTABtn
