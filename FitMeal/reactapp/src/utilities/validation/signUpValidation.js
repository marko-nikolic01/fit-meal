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
        errorMessages.email = "Invalid e-mail format."
        return
    }

    if (email.length > 254) {
        errorMessages.email = "E-mail can't be longer than 254 characters."
        return
    }
}

function validateUsername(username) {
    if (username === "") {
        errorMessages.username = "Username is required."
        return
    }

    const usernameRegex = /^[a-zA-Z0-9_]+$/
    const isValid = usernameRegex.test(username)
    if (!isValid) {
        errorMessages.username = "Username must only contain letters, digits, and underscores."
        return
    }

    if (username.length > 30) {
        errorMessages.username = "Username can't be longer than 30 characters."
        return
    }
}

function validatePassword(password) {
    if (password === "") {
        errorMessages.password = "Password is required."
        return
    }

    if (password.length < 8) {
        errorMessages.password = "Password can't be shorter than 8 characters."
        return
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/
    const isValid = passwordRegex.test(password)
    if (!isValid) {
        errorMessages.password = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces."
        return
    }

    if (password.length > 30) {
        errorMessages.password = "Password can't be longer than 30 characters."
        return
    }
}

function validateRepeatPassword(repeatPassword) {
    if (repeatPassword === "") {
        errorMessages.repeatPassword = "Password is required."
        return
    }

    if (repeatPassword.length < 8) {
        errorMessages.repeatPassword = "Password can't be shorter than 8 characters."
        return
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/
    const isValid = passwordRegex.test(repeatPassword)
    if (!isValid) {
        errorMessages.repeatPassword = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces."
        return
    }

    if (repeatPassword.length > 30) {
        errorMessages.repeatPassword = "Password can't be longer than 30 characters."
        return
    }
}

function validatePasswordMatch(password, repeatPassword) {
    if (!errorMessages.password && !errorMessages.repeatPassword && password !== repeatPassword) {
        errorMessages.password = "Passwords do not match."
        errorMessages.repeatPassword = "Passwords do not match."
    }
}

export default validate