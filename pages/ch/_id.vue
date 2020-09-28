<template>
  <section class="section profile">
    <div class="columns profile">
      <div class="column is-two-thirds test">
        <div class="container profile left">
          <p> Here you are</p>
          <img :src="user.picture"/>
        </div>
        <div class="container profile left">
          <p> Here you are {{ this.$route.params.id }} </p>
        </div>
        <div class="container profile left">
          <p> Here you are</p>
        </div>
      </div>
      <div class="column is-one-third test">
        Place holder for future use: probably job recommendations
      </div>
    </div>
  </section>
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

.section.profile {
    display: flex;
    justify-content: center;
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

.columns.profile {
  width: 100%;
  margin-top: 1rem;
}
.column.test {
  border: solid red 1px;
}
</style>
