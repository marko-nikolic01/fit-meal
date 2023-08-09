let errorMessages
function validate(signInForm) {
    const { email, password } = signInForm
    errorMessages = {
        email: "",
        password: ""
    }
    validateEmail(email)
    validatePassword(password)
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
        errorMessages.email = "Invalid e-mail format."
    }

    if (email.length > 254) {
        errorMessages.email = "E-mail can't be longer than 254 characters."
        return
    }
}

function validatePassword(password) {
    if (password === "") {
        errorMessages.password = "Password is required."
    }

    if (password.length < 8) {
        errorMessages.password = "Password can't be shorter than 8 characters."
        return
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/
    const isValid = passwordRegex.test(password)
    if (!isValid) {
        errorMessages.password = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces."
    }

    if (password.length > 30) {
        errorMessages.password = "Password can't be longer than 30 characters."
        return
    }
}

export default validate