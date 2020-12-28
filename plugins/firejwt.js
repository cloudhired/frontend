import { fireAuth } from '@/plugins/firebase.js'

export default ({ store, app, $http }, inject) => {
  inject('jwtHttpUsername', function () {
    fireAuth.currentUser.getIdToken().then(async function(idToken) {
      // Send token to your backend via HTTPS
      $http.setHeader('Authorization', `Bearer ${idToken}`)
      $http.$get(`https://api.cloudhired.com/api/uidtousername/${idToken}`)
      // TODO: need to write failure case
      .then(res => {
        store.commit('setTest', res.username)
      })
    })
  })
}