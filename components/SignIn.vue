<template>
  <div id="signInModel" v-bind:class="{'modal':true, 'is-active':isSignInModal}">
    <div class="modal-background"></div>
    <button v-on:click="toggleSignInModal()" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebaseui/dist/firebaseui.css'
// import firebaseui from 'firebaseui'
import { fireAuth, authProviders } from '~/plugins/firebase'

export default {
  inject: ["toggleSignInModal"],
  props: ['isSignInModal'],
  mounted: function() {
    if (process.browser) {
      const firebaseui = require('firebaseui')
      require("firebaseui/dist/firebaseui.css")
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(fireAuth)
      const config = {
        // credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [authProviders.Google, authProviders.Email],
        signInFlow: 'popup',
        // tosUrl: '/tos',
        // privacyPolicyUrl: '/privacy-policy',
        callbacks: {
          signInSuccessWithAuthResult: this.signInResult,
          uiShown: function () {
            console.log('uiShown')
          }, 
        }
      }
      ui.start('#signInModel', config)
      fireAuth.onAuthStateChanged(function() {
        if (!this.$store.state.user) {
          ui.start('#signInModel', config)
        }
      })
      // ui.disableAutoSignIn()
      // if (this.$store.state.user) {
      //   this.openAppPage()
      // } else {
      //   ui.start('#signInModel', config)
      // }
    }
  },
  methods: {
    signInResult() {
      // this.openAppPage()
      console.log('signInSuccessWithAuthResult... setting modal display to false')
      this.toggleSignInModal()
      return false
    },
    openAppPage() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
