export function setToken(token) {
    localStorage.setItem("jwt", token);
}

export function getToken() {
    return localStorage.getItem("jwt");
}

export function invalidateToken() {
    localStorage.removeItem("jwt");
}

export function authorize() {
    const token = getToken()
    if (token == null) {
        return false
    }
    return true
}