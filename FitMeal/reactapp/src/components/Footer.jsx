import { useState } from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './Footer.css'

function Footer(props) {
    const { theme, toggleTheme } = props

    return (
        <>
            <div className={`footer background-${theme}-tertiary`}>
                <div className="footer-theme">
                    <div className={`footer-text text-${theme}-secondary`}>Theme:</div>
                    <button className={`footer-theme-button background-${theme}-primary border-${theme}-primary`} onClick={toggleTheme}>
                        <div className={`footer-theme-switch footer-theme-switch-${theme} button-${theme}-primary`}></div>
                        <img className="footer-theme-sun" src={theme === "light" ? "./images/SunLight.svg" : "./images/SunDark.svg"}/>
                        <img className="footer-theme-moon" src={theme === "light" ? "./images/MoonLight.svg" : "./images/MoonDark.svg"}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Footer