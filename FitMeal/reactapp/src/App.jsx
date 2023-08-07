import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'

function App() {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        let newTheme
        if (theme === "light") {
            newTheme = "dark"
        }
        else if (theme === "dark") {
            newTheme = "light"
        }
        setTheme(() => newTheme)
    }

    return (
        <>
            <BrowserRouter>
                <Header theme={theme} />
                <Routes>
                    <Route index element={<Home theme={theme} />} />
                    <Route path="/signin" element={<SignIn theme={theme} />} />
                    <Route path="/signup" element={<SignUp theme={theme} />} />
                </Routes>
            </BrowserRouter>
            <Footer theme={theme} toggleTheme={toggleTheme} />
        </>
    )
}

export default App