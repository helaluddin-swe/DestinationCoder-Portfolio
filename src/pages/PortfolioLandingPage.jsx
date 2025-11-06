import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ScrollIndicator from "./HeroSection/components/ScrollIndicator"
import Hero from "./HeroSection/Hero"
import ProjectSection from "./Project/ProjectSection"
import SkillSection from "./SkillSection/SkillSection"


const PortfolioLandingPage = () => {

  return (
    < div >
      <Header />
      <Hero/>
      <ScrollIndicator show={true} />
      <SkillSection/>
      <ProjectSection/>
      <AboutSection/>

      <Footer />

    </div>
  )
}

export default PortfolioLandingPage
