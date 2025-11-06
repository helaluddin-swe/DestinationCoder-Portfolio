import { motion } from "framer-motion"
import { STATS } from "../../../utils/data"
import { containerVarients, itemVariants } from "../../../utils/HeroData"


const SkillStats = () => {
    return (
        <motion.div  transition={{duration:2,scale:1.05}} variants={containerVarients}  className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-20 mb-8">
            {STATS.map((stat) => (
                <motion.div key={stat.statistic} variants={itemVariants}>
                    <div className="mb-2 md:mb-3 text-blue-500 text-3xl  text-center"> {stat.value}</div>
                    <div className="text-center">{stat.statistic}</div>

                </motion.div>
            ))}
        </motion.div>
    )
}

export default SkillStats
