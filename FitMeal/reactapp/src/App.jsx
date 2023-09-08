import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { authorize } from './utilities/security/JWTSecurity.js'
import './App.css'
import Welcome from './components/Welcome.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Foods from './components/Foods.jsx'

function App() {
    const [theme, setTheme] = useState(() => {
        const themeFromStorage = localStorage.getItem("theme")
        if (themeFromStorage == null) {
            return "light"
        }
        return themeFromStorage
    })
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(authorize())

    function toggleTheme() {
        let newTheme
        if (theme === "light") {
            newTheme = "dark"
        }
        else if (theme === "dark") {
            newTheme = "light"
        }
        setTheme(() => newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header theme={theme} isUserAuthenticated={isUserAuthenticated} setIsUserAuthenticated={setIsUserAuthenticated} />
                    <Routes>
                        <Route index element={<Welcome theme={theme} />} />
                        <Route path="/signin" element={<SignIn theme={theme} setIsUserAuthenticated={setIsUserAuthenticated} />} />
                        <Route path="/signup" element={<SignUp theme={theme} setIsUserAuthenticated={setIsUserAuthenticated} />} />
                        <Route path="/home" element={
                            <>
                                <NavigationBar theme={theme} selectedTab='Home' />
                                <Home theme={theme} isUserAuthenticated={isUserAuthenticated} />
                            </>
                        } />
                        <Route path="/foods" element={
                            <>
                                <NavigationBar theme={theme} selectedTab='Foods' />
                                <Foods theme={theme} isUserAuthenticated={isUserAuthenticated} />
                            </>
                        } />
                    </Routes>
                    <Footer theme={theme} toggleTheme={toggleTheme} />
                </div>
            </BrowserRouter>
        </>
    )
}

export default App