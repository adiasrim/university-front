import router from "@/router";
import tokenize from "@/plugins/tokenize";

export default {
    namespaced: true,

    state: {
        user: {},
        isAuthenticated: false,
    },

    getters: {
        user: state => state.user,
        isAuthenticated: state => state.isAuthenticated,
    },

    mutations: {
        SET_AUTH (state, { user, isAuthenticated }) {
            state.user = user
            state.isAuthenticated = isAuthenticated
        }
    },

    actions: {
        async login ({ commit }, { email, password }) {
            const { data: { data: { token, user } } } = await axios.post('auth/login', { email, password })

            tokenize.save(token);

            commit('SET_AUTH', { user, isAuthenticated: true });

            await router.push({ name: 'Home' })
        }
    }
}