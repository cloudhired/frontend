import { fireAuth } from '@/plugins/firebase.js'

export default ({ app, $http }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('jwtHttp', function (url) {
      fireAuth.currentUser.getIdToken().then(async function(idToken) {
        // Send token to your backend via HTTPS
        $http.setHeader('Authorization', `Bearer ${idToken}`)
        let res = await $http.$get(url)
        return res
      })
    })
  }