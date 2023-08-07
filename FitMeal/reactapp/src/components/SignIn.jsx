import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './styles/SignIn.css'

function SignIn(props) {
    const { theme } = props
    const [eye, setEye] = useState("opened")

    const navigate = useNavigate();

    const toSignUp = () => {
        navigate('/signup');
        window.scrollTo(0, 0);
    }

    function toggleEye() {
        let newEye
        if (eye === "opened") {
            newEye = "closed"
        }
        else if (eye === "closed") {
            newEye = "opened"
        }
        setEye(() => newEye)
    }

    return (
        <>
            <div className={`sign-in background-${theme}-secondary background-picture-${theme}`}>
                <div className={`sign-in-form background-${theme}-primary border-${theme}-primary`}>
                    <div className={`sign-in-title text-${theme}-primary`}>Sign in</div>
                    <div className={`sign-in-label text-${theme}-primary`}>E-mail:</div>
                    <input className={`sign-in-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type="email" placeholder="Enter e-mail" />
                    <div className="sign-in-error">error</div>
                    <div className={`sign-in-label text-${theme}-primary`}>Password:</div>
                    <div className="sign-in-password">
                        <input className={`sign-in-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type={eye === "opened" ? "password" : "text"} placeholder="Enter password" />
                        <img className="sign-in-password-eye" src={`./images/Eye-${eye}-${theme}.svg`} onClick={toggleEye}/>
                    </div>
                    <div className="sign-in-error">error</div>
                    <button className="sign-in-button">Sign in</button>
                    <div className={`sign-in-question text-${theme}-primary`}>Don't have an account?</div>
                    <div className="sign-in-answer" onClick={toSignUp}> Sign up</div>
                </div>
            </div>
        </>
    )
}

export default SignIn