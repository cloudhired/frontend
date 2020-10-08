<template>
  <section class="section profile">
    <div class="columns profile">
      <div class="column is-two-thirds pl-0">
        <div class="container profile">
          <div class="profile basic left">
            <div class="container">
              <figure class="image is-128x128">
                <img class="is-rounded" :src="user.picture"/>
              </figure> 
            </div>
            <div class="container">
              <ul class="profile mt-1">
                <li> {{ user.name }} </li>
                <li> Software Engineer </li>
              </ul>
            </div>
          </div>
          <div class="profile basic right">
            <ul class="profile-b">
              <li><span class="icon"><fa :icon="['fa', 'globe-americas']"/></span> <span>Louisville, KY, USA</span></li>
              <li><span class="icon"><fa :icon="['fa', 'briefcase']"/></span> <span>Humana Inc.</span></li>
              <li><span class="icon"><fa :icon="['fa', 'dumbbell']"/></span> <span>5 years of experience</span></li>
              <li><span class="icon"><fa :icon="['fa', 'blog']"/></span> <span><a href="https://gaomengen.com"> https://gaomengen.com </a></span></li>
              <li class="social"> 
                <a href=""><span class="icon mx-1"><fa :icon="['fab', 'linkedin']"/></span></a>
                <a href=""><span class="icon mx-1"><fa :icon="['fab', 'github-square']"/></span></a>
                <a href=""><span class="icon mx-1"><fa icon="envelope-square"/></span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Introduction </strong>
            </div>
            <div >
              <a href=""><span class="icon mx-1"><fa icon="edit"/></span></a>
            </div>
          </div>
          <div class="profile t">
            <p> Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. </p>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Skills </strong>
            </div>
            <div >
              <a href=""><span class="icon mx-1"><fa icon="edit"/></span></a>
            </div>
          </div>
          
          <div class="field is-grouped is-grouped-multiline mx-4 my-4">
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Technology</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Cloud Computing</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">GCP</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Python</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Node.js</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Nuxt.js</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Linux</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Eating</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Drinking</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
            <div class="control">
              <div class="tags has-addons">
                <a class="tag is-link">Couching</a>
                <a class="tag is-delete"></a>
              </div>
            </div>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Certifications </strong>
            </div>
            <div >
              <a href=""><span class="icon mx-1"><fa icon="edit"/></span></a>
            </div>
          </div>
          <div class="profile t">
            <table class="table cert">
              <tbody>
                <tr>
                  <td class="pl-0"><figure class="image is-32x32"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>Google Cloud Professional Architect</td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-32x32"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>Google Cloud Professional Developer</td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-32x32"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>Google Cloud Professional Data Engineer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Portfolios </strong>
            </div>
            <div >
              <a href=""><span class="icon mx-1"><fa icon="edit"/></span></a>
            </div>
          </div>
          <div class="profile t mt-0">
            <div class="graph">
              <ul class="months">
                <li>Jan</li>
                <li>Feb</li>
                <li>Mar</li>
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
                <li>Jul</li>
                <li>Aug</li>
                <li>Sep</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
              </ul>
              <!-- <ul class="days">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </ul> -->
              <ul class="squares">
                <!-- added via Vue v-for. Need to get real data later -->
                <li :data-level="Math.floor(Math.random() * 3)" v-for="index in 364" :key="index"></li>
              </ul>
            </div>
          </div>
          <div class="profile t">
            <table class="table cert">
              <tbody>
                <tr>
                  <td class="pl-0"><figure class="image is-is-16by9" style="width:128px"><img src="https://bulma.io/images/placeholders/640x360.png"></figure></td>
                  <td>
                    <div class="content">
                      This is my work. You may think this is stupid but it actually quite popular among the stupid people. So if you think this is not funny, then you are not 
                      one of us.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-is-16by9" style="width:128px"><img src="https://bulma.io/images/placeholders/640x360.png"></figure></td>
                  <td>
                    <div class="content">
                      This is my work. You may think this is stupid but it actually quite popular among the stupid people. So if you think this is not funny, then you are not 
                      one of us.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-is-16by9" style="width:128px"><img src="https://bulma.io/images/placeholders/640x360.png"></figure></td>
                  <td>
                    <div class="content">
                      This is my work. You may think this is stupid but it actually quite popular among the stupid people. So if you think this is not funny, then you are not 
                      one of us.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-is-16by9" style="width:128px"><img src="https://bulma.io/images/placeholders/640x360.png"></figure></td>
                  <td>
                    <div class="content">
                      This is my work. You may think this is stupid but it actually quite popular among the stupid people. So if you think this is not funny, then you are not 
                      one of us.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-is-16by9" style="width:128px"><img src="https://bulma.io/images/placeholders/640x360.png"></figure></td>
                  <td>
                    <div class="content">
                      This is my work. You may think this is stupid but it actually quite popular among the stupid people. So if you think this is not funny, then you are not 
                      one of us.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div><div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Courses </strong>
            </div>
            <div >
              <a href=""><span class="icon mx-1"><fa icon="edit"/></span></a>
            </div>
          </div>
          <div class="profile t">
            <table class="table cert">
              <tbody>
                <tr>
                  <td class="pl-0">M220JS: MongoDB for Javascript Developers</td>
                </tr>
                <tr>
                  <td class="pl-0">M001: MongoDB Basics</td>
                </tr>
                <tr>
                  <td class="pl-0">M121: The MongoDB Aggregation Framework</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="column is-one-third pr-0">
        <div class="container profile block">
          <div class="profile t">
            <table class="table cert">
                <tbody>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> John Portland </p>
                      <p style="font-size:.7rem"> Software Engineer </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> Ravi Kumar </p>
                      <p style="font-size:.7rem"> Full Stack Engineer </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> Anthony Dinozzo  </p>
                      <p style="font-size:.7rem"> Front End Engineer </p>
                    </div>
                  </td>
                </tr>
              </tbody>
              </table>
          </div>
        </div>
                <div class="container profile block">
          <div class="profile t">
            <table class="table cert">
              <tbody>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> John Portland </p>
                      <p style="font-size:.7rem"> Software Engineer </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> Ravi Kumar </p>
                      <p style="font-size:.7rem"> Full Stack Engineer </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> Anthony Dinozzo  </p>
                      <p style="font-size:.7rem"> Front End Engineer </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <table class="table cert">
              <tbody>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> John Portland </p>
                      <p style="font-size:.7rem"> Software Engineer </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> Ravi Kumar </p>
                      <p style="font-size:.7rem"> Full Stack Engineer </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="pl-0"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td>
                    <div>
                      <p> Anthony Dinozzo  </p>
                      <p style="font-size:.7rem"> Front End Engineer </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
  mounted() {
    this.$nextTick(() => {
      // this.$nuxt.$loading.start()
      // alert("hi")
      // setTimeout(() => this.$nuxt.$loading.finish(), 500)
      const squares = document.querySelector('.squares');
      for (var i = 1; i < 365; i++) {
        const level = Math.floor(Math.random() * 3);
        // squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
      }
    })
  }
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

.container.profile.block {
  display: block;
}

.container.main-page {
  margin-bottom: 300px;
}

.columns.profile {
  min-height: 700px;
  width: 100%;
  margin-top: 1rem;
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
  margin-top: 0rem;
  text-align: left;
}

.profile-b li {
  height: 1.5rem;
}

.profile li.social {
  font-size: 2rem;
}

.profile li span {
  vertical-align: middle;
}

.profile.basic.right ul {
  margin-left: 3rem;
  text-align: left;
}

.profile.t {
  // width: 100%;
  display: flex;
  text-align: left;
  margin: 1rem;
}

.table.cert td {
  border-bottom: 0;
  padding: .25rem .25rem;
  vertical-align: middle;
}

/* Article - https://bitsofco.de/github-contribution-graph-css-grid/ */
/* Grid-related CSS */

:root {
  --square-size: .6rem;
  --square-gap: .23rem;
  --week-width: calc(var(--square-size) + var(--square-gap));
}

.months { grid-area: months; }
// .days { grid-area: days; }
.squares { grid-area: squares; }

.graph {
  display: inline-grid;
  grid-template-areas: "empty months"
                       "days squares";
  // grid-template-columns: auto 1fr;
  // grid-gap: .5rem;
}

.months {
  display: grid;
  font-size: 70%;
  grid-template-columns: calc(var(--week-width) * 4) /* Jan */
                         calc(var(--week-width) * 4) /* Feb */
                         calc(var(--week-width) * 4) /* Mar */
                         calc(var(--week-width) * 5) /* Apr */
                         calc(var(--week-width) * 4) /* May */
                         calc(var(--week-width) * 4) /* Jun */
                         calc(var(--week-width) * 5) /* Jul */
                         calc(var(--week-width) * 4) /* Aug */
                         calc(var(--week-width) * 4) /* Sep */
                         calc(var(--week-width) * 5) /* Oct */
                         calc(var(--week-width) * 4) /* Nov */
                         calc(var(--week-width) * 5) /* Dec */;
}

// .days,
.squares {
  display: grid;
  grid-gap: var(--square-gap);
  grid-template-rows: repeat(7, var(--square-size));
}

.squares {
  grid-auto-flow: column;
  grid-auto-columns: var(--square-size);
}

.graph {
  padding-bottom: 1rem;
  border-bottom: 1px #e1e4e8 solid;
}

// .days li:nth-child(odd) {
//   visibility: hidden;
// }

.squares li {
  background-color: #ebedf0;
}

.squares li[data-level="1"] {
  background-color: #c6e48b;
}

.squares li[data-level="2"] {
  background-color: #7bc96f;
}

.squares li[data-level="3"] {
  background-color: #196127;
}

</style>
