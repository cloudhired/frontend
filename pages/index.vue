<template>
  <HelperFetchingPlaceholder v-if="$fetchState.pending" msg="Loading page..."/>
  <section v-else class="section">
    <!-- <div class="" id="level-container" v-if="$auth.loggedIn"> -->
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
    <!-- </div> -->
    <div class="">
      <table class="table is-hoverable is-full">
        <tbody>
          <tr style="height:6rem" v-for="user in users.results" :key="user.name">
            <th> {{ user.name }} </th>
            <td> {{user.location }} </td>
            <td> {{user.company }} </td>
            <td> {{user.yoe }} </td>
            <td> {{user.certifications }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'index',
  // TODO: when nav back to index, there occurs network error and couldn't render the page. I suspect it is because of this function. 
  data() {
    return {
      users: []
    }
  }, 
  async fetch () {
    this.users = await this.$http.$get('/api/users')
      .then(users => users)
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
.container.main-page {
  margin-bottom: 300px;
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
