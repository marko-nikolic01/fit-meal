let errorMessages

function validate(signUpForm) {
    const { email, username, password, repeatPassword } = signUpForm
    errorMessages = {
        email: "",
        username: "",
        password: "",
        repeatPassword: ""
    }
    validateEmail(email)
    validateUsername(username)
    validatePassword(password)
    validateRepeatPassword(repeatPassword)
    validatePasswordMatch(password, repeatPassword)
    return errorMessages
}

function validateEmail(email) {
    if (email === "") {
        errorMessages.email = "E-mail is required."
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(email)
    if (!isValid) {
        errorMessages.email = "Invalid email format."
    }
}

function validateUsername(password) {
    if (password === "") {
        errorMessages.username = "Username is required."
    }
}

function validatePassword(password) {
    if (password === "") {
        errorMessages.password = "Password is required."
    }
}

function validateRepeatPassword(repeatPassword) {
    if (repeatPassword === "") {
        errorMessages.repeatPassword = "Password is required."
    }
}

function validatePasswordMatch(password, repeatPassword) {
    if (!errorMessages.password && !errorMessages.repeatPassword && password !== repeatPassword) {
        errorMessages.password = "Passwords do not match."
        errorMessages.repeatPassword = "Passwords do not match."
    }
}

export default validate