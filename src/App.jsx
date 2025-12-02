import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import PortfolioLandingPage from "./pages/PortfolioLandingPage"
import HtmlToPdf from "./pages/components/ResumeDownload"



const App = () => {
  return (
    <ThemeProvider >
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioLandingPage/>} />
        <Route path="/download-resume" element={<HtmlToPdf/>} />
      </Routes>
    </Router>
    
    </ThemeProvider>
  )
}

export default App
