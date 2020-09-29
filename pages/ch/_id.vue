<template>
  <section class="section profile">
    <div class="columns profile">
      <div class="column is-two-thirds pl-0">
        <div class="container profile left">
          <p> Here you are</p>
          <img :src="user.picture"/>
        </div>
        <div class="container profile">
          <p> Here you are {{ this.$route.params.id }} </p>
        </div>
        <div class="container profile">
          <p> Here you are</p>
        </div>
      </div>
      <div class="column is-one-third pr-0">
        <div class="container profile">
          <span> holder for future use: probably job recommendations </span>
        </div>
        <div class="container profile">
          <p> Maybe three sections: recommended by page owner; recommended by system; and recommended jobs </p>
        </div>
        <div class="container profile">
          <p> The first section is a very exciting feature because the page owner actually has control of the things displayed on their
            page. They can recommend their mentorees and maybe <strong> the jobs </strong> from their company. (they will have to list first)
            and the rest of it is just site wide recommendations </p>
        </div>
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

.container.profile {
  margin: 0 auto;
  width: 100%;
  border:solid #e0e0e0 1px;
  margin-bottom: 1rem;
  background-color: white
}

.container.main-page {
  margin-bottom: 300px;
}

.columns.profile {
  width: 100%;
  margin-top: 1rem;
}
// .column.test {
//   border: solid red 1px;
// }
</style>
