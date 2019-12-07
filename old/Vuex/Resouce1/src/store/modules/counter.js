import * as types from '../types.js';

const state = {
    counter: 0
}
const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
}
const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrease: (state, payload) => {
        state.counter -= payload;
    }
}
const actions = {
    increment: (context, payload) => {
        context.commit('increment', payload);
    },
    decrease: (context, payload) => {
        context.commit('decrease', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration)
    },
    asyncDecrease: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrease', payload.by);
        }, payload.duration)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}