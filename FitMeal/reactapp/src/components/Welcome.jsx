import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authorize } from "../utilities/security/JWTSecurity.js"
import './styles/Welcome.css'

function Welcome(props) {
    const { theme } = props

    const navigate = useNavigate()

    const toSignUp = () => {
        navigate('/signup')
        window.scrollTo(0, 0)
    }

    const toHome = () => {
        navigate('/home')
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        if (authorize()) {
            toHome()
        }
    }, [])

    return (
        <>
            <div className={`welcome background-${theme}-secondary background-picture-${theme}`}>
                <div className="welcome-section">
                    <div className="welcome-section-text">
                        <div className={`welcome-section-title text-${theme}-primary`}>
                            Welcome!
                        </div>
                        <div className={`welcome-section-paragraph text-${theme}-primary`}>
                            Welcome to <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>FitMeal</b>, your ultimate fitness calories tracker app! Whether you're a seasoned fitness enthusiast or just starting your wellness journey, <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>FitMeal</b> is here to support you every step of the way. 
                        </div>
                    </div>
                </div>
                <div className="welcome-section">
                    <div className="welcome-section-text">
                        <div className={`welcome-section-title text-${theme}-primary`}>
                            Fitness starts in the kitchen.
                        </div>
                        <div className={`welcome-section-paragraph text-${theme}-primary`}>
                            Want to eat more mindfully? Use FitMeal too keep track of your <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>meals</b>, <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>calories</b>, <b>macronutrients</b>, <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>water intake</b> and even your <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>workouts</b>. Set personalized fitness goals, monitor your progress, and stay motivated. 
                            We also offer a <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>meal maker</b> that can make you a perfect meal based on foods you own and based on your personalized needs.
                        </div>
                    </div>
                </div>
                <div className="welcome-section">
                    <div className="welcome-section-text">
                        <div className={`welcome-section-title text-${theme}-primary`}>
                            Gain access to our food database.
                        </div>
                        <div className={`welcome-section-paragraph text-${theme}-primary`}>
                            Gain access to our food and exercises <b className={`welcome-section-paragraph-bold text-${theme}-tertiary`}>database</b> with information about calories and macronutrients.
                        </div>
                    </div>
                </div>
                <button className={`welcome-button button-${theme}-primary text-${theme}-secondary`} onClick={toSignUp}>Get started</button>
            </div>
        </>
    )
}

export default Welcome