<template>
    <section class="section" id="navbar-container">
      <SignIn v-bind:isSignInModal="isSignInModal"/>
      <nav class="navbar py-4" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item start" to="/">
              <span class="logo px-3">CH</span>
                <!-- <img src="../static/cloudhired_logo.png" width="112" height="28"> -->
            </nuxt-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-item"><a>About</a></div>
              <div class="navbar-item"><a>Professionals Directory</a></div>
              <div class="navbar-item"><a>Jobs</a></div>
              <div class="navbar-item"><a>Companies</a></div>
              <div class="navbar-item"><a>Read</a></div>
            </div>
            <div class="navbar-end">
              <div class="navbar-item end" v-if="$store.state.user">
                <div id="navbar-dropdown" class="dropdown is-right"  v-bind:class="[isDropped ? 'is-active' : '']" @click="isDropped = !isDropped">
                  <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                      <img class="is-rounded mr-2" :src="user.photoURL"/>
                      <span> {{ user.displayName }} </span>
                      <span class="icon is-small">
                        <span class="icon"><fa icon="angle-down"/></span>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <!-- <nuxt-link :to="{ name: 'ch-id', params: { id: user.displayName }}" class="dropdown-item">Edit Profile</nuxt-link> -->
                      <a class="dropdown-item" @click="editProfile()">Edit Profile </a>
                      <hr class="dropdown-divider">
                      <a class="dropdown-item" @click="logout()"> Log Out </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="navbar-item" v-else>
                <a v-on:click="toggleSignInModal()">Log in</a>
              </div>
            </div>
        </div>
      </nav>
    </section>
</template>

<script>
export default {
  // auth: false, 
  data() {
    return {
      isDropped: false, 
      isSignInModal: false,
      userID: "",
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }, 
  },
  methods: {
    toggleSignInModal () {
      this.isSignInModal = !this.isSignInModal
    },
    // get userId based on Firebase user UID, if does not exist, create one and return it. 
    async editProfile() {
      if (this.$store.state.user) {
        this.userID = await this.$http.$get('https://api.cloudhired.com/api/users')
          // .then(users => users)
      }
    },
    logout() {
      this.$store.dispatch('signOut')
      .then(() => {
        // refresh to restart firebaseUI. cheap fix. need improvement. 
        location.reload()
        // this.$router.replace({ path: '/' })
      })
    }
  }, 
  provide: function() {
          return {
            toggleSignInModal: this.toggleSignInModal, 
          };
        }
}
</script>

<style lang="scss">

.logo {
  color:white;
  font-size:2.5rem; 
  background-color: $primary;
  padding-left: 1rem;
  padding-right: 1rem;
}


</style>