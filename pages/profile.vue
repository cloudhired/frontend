<template>
  <div class="container profile">
    <div class="columns wide">
      <div class="column is-two-thirds test">
        <div class="container profile left">
          <p> Here you are</p>
          <img :src="user.picture"/>
        </div>
        <div class="container profile left">
          <p> Here you are</p>
        </div>
        <div class="container profile left">
          <p> Here you are</p>
        </div>
      </div>
      <div class="column is-one-third test">
        Place holder for future use: probably job recommendations
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'index',
  components: {
    Logo
  },
  // async asyncData({ $axios }) {
  //   const ip = await $axios.$get('/api/users')
  //   return { ip }
  // },
  head() {
    return {
      title: this.user.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
    }
  }, 
  middleware: 'auth',
  computed: {
      user() {
        return this.$auth.user
      }
  },
}
</script>

<style lang="scss">

// @import '~assets/scss/main.scss';

.container.profile {
  margin: 20px auto;
  min-height: 10vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.container.profile.left {
  margin: 0 auto;
  min-height: 10rem;
  width: 100%;
  border:solid red 1px;
}

.container.main-page {
  margin-bottom: 300px;
}

.columns.wide {
  width: 100%
}
.column.test {
  border: solid red 1px;
}
.table.is-full {
  width: 100%;
}

.level-custom {
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 20px 0;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 600;
  font-size: 2rem;
  color: #363636;     // color: $titlecolor;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
