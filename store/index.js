import { fireAuth } from '@/plugins/firebase.js'

export const strict = false

export const state = () => ({
  user: null, 
  username: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setTest(state, payload) {
    state.username = payload
  }
}

export const actions = {
  signOut({ commit }) {
    fireAuth
      .signOut()
      .then(() => {
        commit('setUser', null)
      })
      .catch(err => alert(err))
  }
}