import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import validate from "../utilities/validation/signInValidation.js"
import "./styles/SignIn.css"

function SignIn(props) {
    const { theme } = props
    const [eye, setEye] = useState("opened")
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [validationErrors, setValidationErrors] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        validate(form);
    }, [validationErrors]);

    const navigate = useNavigate();

    const toSignUp = () => {
        navigate("/signup");
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

    function handleChange(event) {
        const { name, value } = event.target
        setForm(previousForm => ({
            ...previousForm,
            [name]: value
        }))
    }

    function signIn() {
        setValidationErrors(() => validate(form))
        if (validationErrors.email || validationErrors.password) {
            return
        }
    }

    return (
        <>
            <div className={`sign-in background-${theme}-secondary background-picture-${theme}`}>
                <div className={`sign-in-form background-${theme}-primary border-${theme}-primary`}>
                    <div className={`sign-in-title text-${theme}-primary`}>Sign in</div>
                    <div className={`sign-in-label text-${theme}-primary`}>E-mail:</div>
                    <input className={`sign-in-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type="email" placeholder="Enter e-mail" name="email" value={form.email} onChange={handleChange} />
                    <div className="sign-in-error">{validationErrors.email}</div>
                    <div className={`sign-in-label text-${theme}-primary`}>Password:</div>
                    <div className="sign-in-password">
                        <input className={`sign-in-input text-${theme}-primary background-${theme}-primary border-${theme}-primary`} type={eye === "opened" ? "password" : "text"} placeholder="Enter password" name="password" value={form.password} onChange={handleChange} />
                        <img className="sign-in-password-eye" src={`./images/Eye-${eye}-${theme}.svg`} onClick={toggleEye}/>
                    </div>
                    <div className="sign-in-error">{validationErrors.password}</div>
                    <button className="sign-in-button" onClick={signIn}>Sign in</button>
                    <div className={`sign-in-question text-${theme}-primary`}>Don't have an account?</div>
                    <div className="sign-in-answer" onClick={toSignUp}> Sign up</div>
                </div>
            </div>
        </>
    )
}

export default SignIn