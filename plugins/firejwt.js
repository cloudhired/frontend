import { fireAuth } from '@/plugins/firebase.js'

export default ({ store, app, $http }, inject) => {
  let BASE_URL = "https://api.cloudhired.com/"
  inject('jwtHttpUsername', function () {
    fireAuth.currentUser.getIdToken().then(async function(idToken) {
      // Send token to your backend via HTTPS
      $http.setHeader('Authorization', `Bearer ${idToken}`)
      $http.setHeader('x-auth-token', idToken)
      $http.$get(`https://api.cloudhired.com/api/uidtousername`)
      // TODO: need to write failure case
      .then(res => {
        store.commit('setUsername', res.username)
      })
    })
  }),
  inject('jwtPost', async function (ep, payload) {
    return await fireAuth.currentUser.getIdToken().then(async function(idToken) {
      // Send token to your backend via HTTPS
      $http.setHeader('Authorization', `Bearer ${idToken}`)
      const res = $http.$post("https://api.cloudhired.com/" + ep, payload)
      return res 
    })
  })
}
