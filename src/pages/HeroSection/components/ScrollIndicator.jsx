import { motion } from "framer-motion";
import { useTheme } from "../../../contexts/ThemeContext";
import { itemVariants } from "../../../utils/HeroData";
import { ArrowDown } from "lucide-react";


const ScrollIndicator = ({ show }) => {
  const { isDarkMode } = useTheme();
  if (!show) return null;

  return (
    <motion.div
      className="animate-bounce flex items-center justify-center" variants={itemVariants}
    >
      <ArrowDown
        size={40}
        className={`${isDarkMode ? "text-white" : "text-gray-900"} text-red-700`}
      />
    </motion.div>
  );
};
export default ScrollIndicator