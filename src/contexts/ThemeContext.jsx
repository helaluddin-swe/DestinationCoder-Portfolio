// src/contexts/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()
export const useTheme =()=>useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    const root = window.document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
      document.body.style.backgroundColor = "#000" // dark bg
      document.body.style.color = "#fff"
    } else {
      root.classList.remove("dark")
      document.body.style.backgroundColor = "#f9fafb" // light bg (Tailwind gray-50)
      document.body.style.color = "#000"
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode: theme === "dark", toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}


