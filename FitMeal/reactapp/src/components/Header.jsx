import { useNavigate } from 'react-router-dom'
import { invalidateToken } from '../utilities/security/JWTSecurity'
import './styles/Header.css'

function Header(props) {
    const { theme, isUserAuthenticated, setIsUserAuthenticated } = props

    const navigate = useNavigate();

    const toWelcome = () => {
        navigate('/')
        window.scrollTo(0, 0)
    }

    const toHome = () => {
        navigate('/home')
        window.scrollTo(0, 0)
    }

    const toSignIn = () => {
        navigate('/signin')
        window.scrollTo(0, 0)
    }

    const toSignUp = () => {
        navigate('/signup')
        window.scrollTo(0, 0)
    }

    function signOut() {
        invalidateToken()
        setIsUserAuthenticated(false)
        toSignIn()
    }

    return (
        <>
            <div className={`header background-${theme}-primary`}>
                <div className="header-logo" onClick={isUserAuthenticated ? toHome : toWelcome}>
                    {theme === "light" && <img className="header-logo-icon" src="./images/FitMealLogoLight.svg" />}
                    {theme === "dark" && <img className="header-logo-icon" src="./images/FitMealLogoDark.svg" />}
                    <div className={`header-logo-text logo-${theme}`}>
                        FitMeal
                    </div>
                </div>
                {isUserAuthenticated
                    ? <div className="header-buttons">
                        <button className={`header-sign-in-button button-${theme}-primary text-${theme}-secondary`} onClick={signOut}>Sign out</button>
                    </div>
                    : <div className="header-buttons">
                        <button className={`header-sign-in-button button-${theme}-primary text-${theme}-secondary`} onClick={toSignIn}>Sign in</button>
                        <button className={`header-sign-up-button button-${theme}-secondary text-${theme}-secondary`} onClick={toSignUp}>Sign up</button>
                    </div>
                }   
            </div>
        </>
    )
}

export default Header