let errorMessages
function validate(signInForm) {
    const { emailOrUsername, password } = signInForm
    errorMessages = {
        emailOrUsername: "",
        password: ""
    }
    validateEmailOrUsername(emailOrUsername)
    validatePassword(password)
    return errorMessages
}

function validateEmailOrUsername(emailOrUsername) {
    if (emailOrUsername === "") {
        errorMessages.emailOrUsername = "E-mail or username is required."
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const usernameRegex = /^[a-zA-Z0-9_]+$/
    const isValid = emailRegex.test(emailOrUsername) || usernameRegex.test(emailOrUsername)
    if (!isValid) {
        errorMessages.emailOrUsername = "Invalid e-mail or username format."
    }

    if (emailOrUsername.length > 254) {
        errorMessages.emailOrUsername = "E-mail or username can't be longer than 254 characters."
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