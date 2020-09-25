<template>
  <div>
    <section class="container" id="level-container" v-if="$auth.loggedIn">
      <nav class="level level-custom">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Pros</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Jobs</p>
            <p class="title">123</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Recruiters</p>
            <p class="title">456K</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Companies</p>
            <p class="title">789</p>
          </div>
        </div>
      </nav>
    </section>
    <section class="container">
      <table class="table is-striped is-bordered is-hoverable is-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Company</th>
            <th><abbr title="Year of Experience">YOE</abbr></th>
            <th><abbr title="Certifications Earned">Certifications</abbr></th>
          </tr>
        </thead>
        <!-- <tfoot>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Company</th>
            <th><abbr title="Year of Experience">YOE</abbr></th>
            <th><abbr title="Certifications Earned">Certifications</abbr></th>
          </tr>
        </tfoot> -->
        <tbody>
          <tr>
            <th>Morgan Gao</th>
            <td>USA</td>
            <td>Humana</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Morgan Gao</th>
            <td>USA</td>
            <td>Humana</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Morgan Gao</th>
            <td>USA</td>
            <td>Humana</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Morgan Gao</th>
            <td>USA</td>
            <td>Humana</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Morgan Gao</th>
            <td>USA</td>
            <td>Humana</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Morgan Gao</th>
            <td>USA</td>
            <td>Humana</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Morgan Gao</th>
            <td>USA</td>
            <td>Humana</td>
            <td>2</td>
            <td>{{ ip }}</td>
          </tr>

        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'index',
  components: {
    Logo
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get('/api/users')
    return { ip }
  },
  head() {
    return {
      title: 'CloudHired - Cloud Professionals are here!',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
    }
  }
}
</script>

<style lang="scss">

// @import '~assets/scss/main.scss';

.container {
  margin: 10px auto;
  min-height: 0vh;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
