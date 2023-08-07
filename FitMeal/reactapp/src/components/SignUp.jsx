import { useState } from "react"
import { useNavigate } from "react-router-dom"
import validate from "../utilities/validation/signUpValidation.js"
import "./styles/SignUp.css"

function SignIn(props) {
    const { theme } = props
    const [eye, setEye] = useState("opened")
    const [eyeRepeat, setEyeRepeat] = useState("opened")
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        repeatPassword: ""
    })
    const [validationErrors, setValidationErrors] = useState({
        email: "",
        username: "",
        password: "",
        repeatPassword: ""
    })

    const navigate = useNavigate();

    const toSignIn = () => {
        navigate("/signin");
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

    function toggleEyeRepeat() {
        let newEye
        if (eyeRepeat === "opened") {
            newEye = "closed"
        }
        else if (eyeRepeat === "closed") {
            newEye = "opened"
        }
        setEyeRepeat(() => newEye)
    }

    function handleChange(event) {
        const { name, value } = event.target
        setForm(previousForm => ({
            ...previousForm,
            [name]: value
        }))
    }

    function signUp() {
        setValidationErrors(() => validate(form))
        if (validationErrors.email || validationErrors.username || validationErrors.password || validationErrors.repeatPassword) {
            return
        }
    }

    return (
        <>
            <div className={`sign-up background-${theme}-secondary background-picture-${theme}`}>
                <div className={`sign-up-form background-${theme}-primary border-${theme}-primary`}>
                    <div className={`sign-up-title text-${theme}-primary`}>Sign up</div>
                    <div className={`sign-in-label text-${theme}-primary`}>E-mail:</div>
                    <input className={`sign-in-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type="email" placeholder="Enter e-mail" name="email" value={form.email} onChange={handleChange} />
                    <div className="sign-in-error">{validationErrors.email}</div>
                    <div className={`sign-up-label text-${theme}-primary`}>Username:</div>
                    <input className={`sign-up-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type="text" placeholder="Enter username" name="username" value={form.username} onChange={handleChange} />
                    <div className="sign-up-error">{validationErrors.username}</div>
                    <div className={`sign-up-label text-${theme}-primary`}>Password:</div>
                    <div className="sign-up-password">
                        <input className={`sign-up-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type={eye === "opened" ? "password" : "text"} placeholder="Enter password" name="password" value={form.password} onChange={handleChange} />
                        <img className="sign-up-password-eye" src={`./images/Eye-${eye}-${theme}.svg`} onClick={toggleEye}/>
                    </div>
                    <div className="sign-up-error">{validationErrors.password}</div>
                    <div className={`sign-up-label text-${theme}-primary`}>Repeat password:</div>
                    <div className="sign-up-password">
                        <input className={`sign-up-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type={eyeRepeat === "opened" ? "password" : "text"} placeholder="Enter password" name="repeatPassword" value={form.repeatPassword} onChange={handleChange} />
                        <img className="sign-up-password-eye" src={`./images/Eye-${eyeRepeat}-${theme}.svg`} onClick={toggleEyeRepeat} />
                    </div>
                    <div className="sign-up-error">{validationErrors.repeatPassword}</div>
                    <button className="sign-up-button" onClick={signUp}>Sign Up</button>
                    <div className={`sign-up-question text-${theme}-primary`}>Already have an account?</div>
                    <div className="sign-up-answer" onClick={toSignIn}> Sign in</div>
                </div>
            </div>
        </>
    )
}

export default SignIn