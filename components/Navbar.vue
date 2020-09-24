<template>
    <section class="container" id="navbar-container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="../static/cloudhired_logo.png" width="112" height="28">
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">Home</a>
              <a class="navbar-item">Read</a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item" v-if="$auth.loggedIn">
                <div class="dropdown is-right" v-bind:class="[isActive ? 'is-active' : '']" @click="toggleClass()">
                  <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                      <img :src="user.picture"/>
                      <span> {{ user.name }} </span>
                      <span class="icon is-small">
                        <span class="icon"><fa icon="angle-down"/></span>
                      </span>
                    </button>
                  </div>
                  <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">
                      <a class="dropdown-item"> Edit Profile </a>
                      <hr class="dropdown-divider">
                      <a class="dropdown-item" @click="$auth.logout()"> Log Out </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="navbar-item" v-else>
                <a class="button is-white small-padding">Sign up</a>
                <a class="button is-white small-padding" @click="$auth.loginWith('auth0')">Log in</a>
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
      isActive: false
    }
  },
  middleware: 'auth',
  computed: {
    user() {
      return this.$auth.user
    }
  },
  methods: {
    toggleClass: function (event) {
      this.isActive = !this.isActive
    }
  }
}
</script>