<template>
  <div id="signInModel" v-bind:class="{'modal':true, 'is-active':isSignInModal}">
    <div class="modal-background"></div>
    <div class="modal-card">        
      <button v-on:click="isSignInModal = !isSignInModal" class="delete" aria-label="close"></button>
    </div>
  </div>
  <!-- <div id="firebaseui-auth-container">

  </div> -->
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebaseui/dist/firebaseui.css'
// import firebaseui from 'firebaseui'

export default {
  inject: ["toogleSignInModal"],
  props: ['isSignInModal'],
  mounted() {
    const firebaseui = require('firebaseui')
    require("firebaseui/dist/firebaseui.css")
    // https://github.com/firebase/firebaseui-web/issues/216
    // for below version 7
    // const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fireAuth)
    // for version 7 and above
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fire.auth)

    const config = {
      signInOptions: [
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID
        // this.$fireAuthObj.GoogleAuthProvider.PROVIDER_ID
        this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/',
      // tosUrl: '/tos',
      // privacyPolicyUrl: '/privacy',
      callbacks: {
        signInSuccessWithAuthResult() {
          console.log('signInSuccessWithAuthResult')
        },
        uiShown: function () {
          console.log('uiShown')
        }
      }
    }

    ui.start('#signInModel', config)
  }
}
</script>