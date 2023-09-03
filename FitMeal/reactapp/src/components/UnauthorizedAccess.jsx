import { useNavigate } from "react-router-dom"
import './styles/UnauthorizedAccess.css'

function UnauthorizedAccess(props) {
    const { theme } = props

    const navigate = useNavigate();

    const toSignIn = () => {
        navigate('/signin');
        window.scrollTo(0, 0);
    }

    return (
        <>
            <div className={`unauthorized-access background-${theme}-secondary background-picture-${theme}`}>
                <div className='unauthorized-access-section'>
                    <div className="unauthorized-access-text">
                        <div className={`unauthorized-access-title`}>
                            Unauthorized access!
                        </div>
                        <div className={`unauthorized-access-paragraph`}>
                            You must sign in to access this page.
                        </div>
                    </div>
                </div>
                <button className={`unauthorized-access-button button-${theme}-primary text-${theme}-secondary`} onClick={toSignIn}>Sign in</button>
            </div>
        </>
    )
}

export default UnauthorizedAccess