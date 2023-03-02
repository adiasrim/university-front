export default {
    namespaced: true,

    state: {
        lessons: []
    },

    getters: {
        lessons: state => state.lessons
    },

    mutations: {
        setLessons (state, lessons) {
            state.lessons = lessons
        }
    },

    actions: {
        async index ({ commit }, filter ) {
            const { data: { data } } = await axios.get('lessons', { params: filter });

            commit('setLessons', data)
        }
    }
}