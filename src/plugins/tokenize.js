export default {
    token: 'auth_token',

    get () {
        return localStorage.getItem(this.token);
    },

    save (token) {
        return localStorage.setItem(this.token, token);
    },
}