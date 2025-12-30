import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { FiGithub } from "react-icons/fi";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ key, index, item }) => {
  const { isDarkMode } = useTheme();
   const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      key={key}
      ref={index}
      variants={cardVariants}
      className={`${
        isDarkMode ? "bg-gray-900/50 text-gray-300" : "bg-white text-gray-700"
      } rounded-xl  overflow-hidden border border-blue-600 relative group`}
    >
      {/* Image Section */}
      <div className="relative w-full h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:blur-xs transition-transform duration-500 group-hover:scale-110"
        />

        {/* Hover Buttons - Appear in center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        > 
         <Link to={item.githubUrl}> <button className="bg-blue-600 flex items-center gap-2 text-white font-semibold border rounded-2xl px-4 py-2 cursor-pointer shadow-md hover:bg-blue-700 transition">
            <FiGithub /> Github
          </button></Link>
         <Link to={item.liveUrl}> <button className="bg-yellow-400 flex items-center gap-2 cursor-pointer text-blue-900 font-semibold rounded-2xl px-4 py-2 shadow-md hover:bg-yellow-500 transition">
            <ExternalLink /> Live Link
          </button></Link>
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="p-4 text-center">
        <h3 className="text-2xl text-blue-500 font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 mb-4">{item.description}</p>
        <div className="flex justify-center flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-gray-400 px-3 py-1 bg-gray-200 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
