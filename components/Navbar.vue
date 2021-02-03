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
                    <button class="button is-ghost" aria-haspopup="true" aria-controls="dropdown-menu">
                      <figure class="image is-24x24">
                        <img class="is-rounded mr-2" :src="user.photoURL"/>
                      </figure>
                      <span class="icon is-small">
                        <span class="icon"><fa icon="angle-down"/></span>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <nuxt-link :to="{ name: 'id', params: { id: username }}" class="dropdown-item">
                        <IconWithText height="1.5rem" iconType="fa" icon="user-edit" text="Edit Profile" /> 
                      </nuxt-link>
                      <!-- <hr class="dropdown-divider"> -->
                      <a class="dropdown-item" @click="logout()"> 
                        <IconWithText height="1.5rem" iconType="fa" icon="sign-out-alt" text="Sign out" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="navbar-item" v-else>
                <a v-on:click="toggleSignInModal()">Sign in</a>
              </div>
            </div>
        </div>
      </nav>
    </section>
</template>

<script>
export default { 
  data() {
    return {
      isDropped: false, 
      isSignInModal: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }, 
    username() {
      return this.$store.state.username
    }
  },
  async fetch () {
    if (this.$store.state.user) {
      this.$jwtHttpUsername()
    }
  },
  methods: {
    toggleSignInModal () {
      this.isSignInModal = !this.isSignInModal
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

.navbar-item.end a {
  border-bottom: solid transparent 1px;
}


</style>