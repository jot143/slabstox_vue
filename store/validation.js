export const state = () => ({
    errors: {},
    message: {}
})

export const getters = {
    errors(state) {
        return state.errors;
    },
    message(state) {
        return state.message;
    }
}

export const mutations = {
    SET_ERRORS(state, errors) {
        state.errors = errors
    },
    SET_MESSAGE(state, message) {
        state.message = message
    }
}

export const actions = {
    setErrors({ commit }, errors) {
        commit('SET_ERRORS', errors)
    },
    clearErrors({ commit }) {
        commit('SET_ERRORS', {})
    },
    setMessage({ commit }, message) {
        commit('SET_MESSAGE', message)
    },
    clearMessage({ commit }) {
        commit('SET_MESSAGE', {})
    }
}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}