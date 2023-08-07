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
        errorMessages.email = "Invalid email format."
    }
}

function validatePassword(password) {
    if (password === "") {
        errorMessages.password = "Password is required."
    }
}

export default validate