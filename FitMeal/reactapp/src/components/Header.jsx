import { useNavigate } from "react-router-dom";
import './styles/Header.css'

function Header(props) {
    const { theme } = props

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
        window.scrollTo(0, 0);
    }

    const toSignIn = () => {
        navigate('/signin');
        window.scrollTo(0, 0);
    }

    const toSignUp = () => {
        navigate('/signup');
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className={`header background-${theme}-primary`}>
                <div className="header-logo" onClick={toHome}>
                    {theme === "light" && <img className="header-logo-icon" src="./images/FitMealLogoLight.svg" />}
                    {theme === "dark" && <img className="header-logo-icon" src="./images/FitMealLogoDark.svg" />}
                    <div className={`header-logo-text logo-${theme}`}>
                        FitMeal
                    </div>
                </div>
                <div className="header-buttons">
                    <button className={`header-sign-in-button button-${theme}-primary text-${theme}-secondary`} onClick={toSignIn}>Sign in</button>
                    <button className={`header-sign-up-button button-${theme}-secondary text-${theme}-secondary`} onClick={toSignUp}>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default Header