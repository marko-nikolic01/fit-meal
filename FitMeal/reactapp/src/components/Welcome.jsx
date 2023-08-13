import {useNavigate } from "react-router-dom"
import './styles/Home.css'

function Welcome(props) {
    const { theme } = props

    const navigate = useNavigate();

    const toSignUp = () => {
        navigate('/signup');
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className={`home background-${theme}-secondary background-picture-${theme}`}>
                <div className="home-section">
                    <div className="home-section-text">
                        <div className={`home-section-title text-${theme}-primary`}>
                            Welcome!
                        </div>
                        <div className={`home-section-paragraph text-${theme}-primary`}>
                            Welcome to <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>FitMeal</b>, your ultimate fitness calories tracker app! Whether you're a seasoned fitness enthusiast or just starting your wellness journey, <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>FitMeal</b> is here to support you every step of the way. 
                        </div>
                    </div>
                </div>
                <div className="home-section">
                    <div className="home-section-text">
                        <div className={`home-section-title text-${theme}-primary`}>
                            Fitness starts in the kitchen.
                        </div>
                        <div className={`home-section-paragraph text-${theme}-primary`}>
                            Want to eat more mindfully? Use FitMeal too keep track of your <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>meals</b>, <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>calories</b>, <b>macronutrients</b>, <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>water intake</b> and even your <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>workouts</b>. Set personalized fitness goals, monitor your progress, and stay motivated. 
                            We also offer a <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>meal maker</b> that can make you a perfect meal based on foods you own and based on your personalized needs.
                        </div>
                    </div>
                </div>
                <div className="home-section">
                    <div className="home-section-text">
                        <div className={`home-section-title text-${theme}-primary`}>
                            Gain access to our food database.
                        </div>
                        <div className={`home-section-paragraph text-${theme}-primary`}>
                            Gain access to our food and exercises <b className={`home-section-paragraph-bold text-${theme}-tertiary`}>database</b> with information about calories and macronutrients.
                        </div>
                    </div>
                </div>
                <button className={`home-button button-${theme}-primary text-${theme}-secondary`} onClick={toSignUp}>Get started</button>
            </div>
        </>
    )
}

export default Welcome