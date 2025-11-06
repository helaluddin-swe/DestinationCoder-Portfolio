import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import PortfolioLandingPage from "./pages/PortfolioLandingPage"



const App = () => {
  return (
    <ThemeProvider >
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioLandingPage/>} />
      </Routes>
    </Router>
    
    </ThemeProvider>
  )
}

export default App
