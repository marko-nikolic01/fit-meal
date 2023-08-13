
export function setToken(token) {
    localStorage.setItem("jwt", token);
}

export function getToken(token) {
    return localStorage.getItem("jwt");
}

export function invalidateToken() {
    localStorage.removeItem("jwt");
}