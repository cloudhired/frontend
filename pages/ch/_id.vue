<template>
  <section class="section profile">
    <div class="columns profile">
      <div class="column is-two-thirds pl-0">
        <div class="container profile left">
          <div class="profile basic left">
            <div class="container">
              <figure class="image is-128x128">
                <img class="is-rounded" :src="user.picture"/>
              </figure> 
            </div>
            <div class="container">
              <ul class="profile">
                <li> {{ user.name }} </li>
                <li> Software Engineer </li>
              </ul>
            </div>
          </div>
          <div class="profile basic right">
            <ul class="profile">
              <li> line one</li>
              <li> line two </li>
              <li> line three </li>
              <li> line four </li>
            </ul>
          </div>
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

.profile.basic {
  display: block;
  margin: 1rem auto;
}

.profile.basic.left {
  width: 40%;
  border-right: $main-border-style;
}

.profile.basic.right {
  width: 60%;
}

.profile ul {
  margin-top: 1rem;
  text-align: left;
}

.profile.basic.right ul {
  margin-left: 3rem;
  text-align: left;
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
