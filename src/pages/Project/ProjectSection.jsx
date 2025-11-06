import {  useInView } from "framer-motion"



import BackgroundSkill from "../SkillSection/components/BackgroundSkill"

import { useEffect, useRef, useState } from "react"
import ProjectHeader from "./components/ProjectHeader"
// import { getProjectItemFromServer } from "../../services/addItemToServer"
import ProjectInputForm from "./components/ProjectInputForm"
import ProjectOutput from "./components/ProjectOutput"



const ProjectSection = () => {
  // const [projectItems, setProjectItems] = useState([])
      // get project from server
      // useEffect(()=>{
      //     getProjectItemFromServer().then(initialItem=>{
      //         setProjectItems(initialItem)
      //     })
      // },[])
  
      
      // const addNewItem = (newItem) => {
      //     if (newItem) {
      //         setProjectItems([...projectItems, newItem]);
      //     }
      // }
  
   const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
   

  return (
    <section className="mb-12 " id="work" ref={sectionRef}  >
      <div className="relative flex md:flex-2 gap-18 overflow-hidden">
        <BackgroundSkill/>
      </div>
      <ProjectHeader isInView={isInView} />
      {/* <ProjectInputForm addNewItem={addNewItem}/>
      <ProjectOutput projectItems={projectItems}/> */}
      

    </section>
  )
}

export default ProjectSection
