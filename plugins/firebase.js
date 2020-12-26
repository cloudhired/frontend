import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    // REQUIRED: Official config for firebase.initializeApp(config):
    apiKey: "AIzaSyDAwm6I7-Kh4DSeIj4k6IARinOV2RPgA8I",
    authDomain: "cloudhired.firebaseapp.com",
    databaseURL: "https://cloudhired.firebaseio.com",
    projectId: "cloudhired",
    storageBucket: "cloudhired.appspot.com",
    messagingSenderId: "782780515351",
    appId: "1:782780515351:web:8b141a7b7a4d045f650852",
    measurementId: "G-2GJWHNQYMK"
  })  
}

export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID
}
export const fireDb = firebase.firestore()
export const fireAuth = firebase.auth()

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('hello', function () {
    fireAuth.currentUser.getIdToken().then(function(idToken) {
      // Send token to your backend via HTTPS
      console.log(idToken)
    })
  })
}