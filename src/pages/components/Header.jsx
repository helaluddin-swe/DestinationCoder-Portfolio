// import { motion } from "framer-motion"
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      style={{ opacity: 1 }}
      className={`px-6 py-4 fixed top-0 w-full z-50 
       
        backdrop-blur-md border-b 
        ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
    >
      {/* logo and signature */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 size={24} className="text-blue-500" />
          <span className="text-3xl  font-bold md:text-4xl px-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent ">
            DestinationCoder
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-xl font-bold px-2 uppercase  transition-colors tracking-wider 
                ${isDarkMode
                  ? "  hover:text-blue-500"
                  : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className=" ">
          <button
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors 
              ${isDarkMode
                ? " hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {/* mobile screen menu only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors md:hidden
              ${isDarkMode
                ? "text-gray-600 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }  `}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4  p-4 rounded-lg"
          >
            {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-xl font-bold cursor-pointer uppercase transition-colors flex  py-2 
                ${isDarkMode
                    ? " hover:text-gray-400"
                    : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
