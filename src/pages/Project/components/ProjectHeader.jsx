import {motion} from "framer-motion"
import { useTheme } from '../../../contexts/ThemeContext'
import { PROJECTS } from '../../../utils/data'
import ProjectCard from '../../components/ProjectCard'

const ProjectHeader = ({isInView}) => {
    const { isDarkMode } = useTheme()
  return (
    <div>
        {/* section work header */}
        <motion.div className="text-center" initial="hidden" animate={isInView? "visible":"hidden"}>
          <motion.div className=" text-center text-xl text-gray-400">
            Feature Work
          </motion.div>
          <motion.h2 className="text-3xl md:text-5xl  mb-4">
            Recent <span className="text-blue-500"> Project</span>
          </motion.h2>
          <motion.p className={`text-sm md:text-md max-w-7xl  font-light mb-16 ${isDarkMode ? " text-gray-300" : " text-gray-500"}`}>
            A Collection of project that shows  my expertise is building  moderen web application & solving complete problem
          </motion.p>

          {/* project grid */}
          <motion.div className=" grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-4 px-4 " initial="hidden" animate={isInView?"visible":"hidden"}>
            {PROJECTS.map((item, index) => (
              <ProjectCard key={item.id} index={index} item={item} />
            ))}
          </motion.div>


        </motion.div>
      </div>
  )
}

export default ProjectHeader
