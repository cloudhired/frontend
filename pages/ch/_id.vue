<template>
  <HelperFetchingPlaceholder v-if="$fetchState.pending" msg="Fetching information..."/>
  <section v-else class="section profile">
    <div class="columns profile">
      <div class="column is-two-thirds pl-0">
        <div class="container profile block">
          <div class="profile t " style="align-items:center; height:auto">
              <div class="profile basic left">
                <div class="container">
                  <figure class="image is-128x128">
                    <!-- For now, use static URI. In the future, first check saved picture, then check user.picture -->
                    <img class="is-rounded" src="../../static/mg_profile.jpg"/>
                  </figure> 
                </div>
                <div class="container">
                  <ul class="profile mt-1">
                    <li v-if="userInfo.fullname"> {{ userInfo.fullname }} </li>
                    <li v-show="userInfo.title"> {{ userInfo.title }} </li>
                  </ul>
                </div>
              </div>
              <div class="profile basic right" style="margin:0;align-self: stretch;">
                <ProfileEditButton editBtnId="editBasicBtn" />
                <ProfileEditModalBasic editModalId="editBasicModal" 
                  v-bind:isEditBasicBtn="isEditBasicBtn" 
                  v-bind:userInfo="userInfo" />
                <div class="mt-4">
                  <ul class="profile-b">
                    <li>
                      <span class="icon"><fa :icon="['fa', 'globe-americas']"/></span> 
                      <span v-if="userInfo.current_loc"> {{ userInfo.current_loc }} </span> 
                      <span v-else> No location added </span></li>
                    <li>
                      <span class="icon"><fa :icon="['fa', 'briefcase']"/></span> 
                      <span v-if="userInfo.company"> {{ userInfo.company }} </span>
                      <span v-else> No company added </span></li>
                    <li>
                      <span class="icon"><fa :icon="['fa', 'dumbbell']"/></span> 
                      <span v-if="userInfo.yoe"> {{ userInfo.yoe }} years of experience</span>
                      <span v-else> Haven't added </span></li>
                    <li>
                      <span class="icon"><fa :icon="['fa', 'blog']"/></span> 
                      <span v-if="userInfo.personal_site"><a :href="userInfo.personal_site"> {{ userInfo.personal_site }} </a></span>
                      <span v-else> No personal site added </span></li>
                    <li class="social"> 
                      <a v-if="userInfo.linkedin_handle" :href="'https://linkedin.com/in/' + userInfo.linkedin_handle" target="_blank">
                        <span class="icon mx-1"><fa :icon="['fab', 'linkedin']"/></span></a>
                      <a v-if="userInfo.github_handle" :href="userInfo.github_handle ? 'https://github.com/' + userInfo.github_handle: ''" target="_blank">
                        <span class="icon mx-1"><fa :icon="['fab', 'github-square']"/></span></a>
                      <a v-if="userInfo.email" :href="'mailto:' + userInfo.email">
                        <span class="icon mx-1"><fa icon="envelope-square"/></span></a>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Introduction </strong>
            </div>
            <ProfileEditButton editBtnId="editIntroBtn" />
            <ProfileEditModalIntro editModalId="editIntroModal" v-bind:isEditIntroBtn="isEditIntroBtn" />
          </div>
          <div class="profile t">
            {{ userInfo.intro }}
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Skills </strong>
              <button @click="$fetch">Refresh</button>
            </div>
            <ProfileEditButton editBtnId="editSkillsBtn" />
            <ProfileEditModalSkills editModalId="editSkillsModal" v-bind:isEditSkillsBtn="isEditSkillsBtn" />
          </div>
          
          <div class="field is-grouped is-grouped-multiline mx-4 my-4">
            <div class="control" v-for="skill in userInfo.skills" v-bind:key="skill">
                <div class="tags has-addons">
                <a class="tag is-link"> {{ skill }} </a>
                <!-- <a class="tag is-delete"></a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <div style="flex:1">
              <strong> Certifications </strong>
            </div>
            <ProfileEditButton editBtnId="editCertsBtn" />
            <ProfileEditModalCerts editModalId="editCertsModal" v-bind:isEditCertsBtn="isEditCertsBtn" />
          </div>
          <div class="profile t">
            <table class="table cert">
              <tbody>
                <tr v-for="cert in userInfo.certs" v-bind:key="cert.id">
                  <td class="pl-0"><figure class="image is-32x32"><img src="https://bulma.io/images/placeholders/48x48.png"></figure></td>
                  <td> {{ cert.cert_name }} </td>
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
            <ProfileEditButton editBtnId="editPtflBtn" />
            <ProfileEditModalPtfl editModalId="editPtflModal" v-bind:isEditPtflBtn="isEditPtflBtn" />
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
                <tr v-for="ptf in userInfo.portfolios" v-bind:key="ptf.id">
                  <td class="pl-0"><figure class="image is-is-16by9" style="width:128px"><img src="https://bulma.io/images/placeholders/640x360.png"></figure></td>
                  <td>
                    <div class="content">
                      {{ ptf.description }}
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
            <ProfileEditButton editBtnId="editCoursesBtn" />
            <ProfileEditModalCourses editModalId="editCoursesModal" v-bind:isEditCoursesBtn="isEditCoursesBtn" />
          </div>
          <div class="profile t">
            <table class="table cert">
              <tbody>
                <tr v-for="course in userInfo.courses" v-bind:key="course.id">
                  <td class="pl-0"> {{ course.name }} </td>
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
export default {
  layout: 'index',
  auth: false,
  data() {
    return {
      userInfo: [],
      isEditBasicBtn: false,
      isEditIntroBtn: false,
      isEditSkillsBtn: false,
      isEditCertsBtn: false,
      isEditPtflBtn: false,
      isEditCoursesBtn: false,
    }
  }, 
  async fetch () {
    // TODO: I believe I shouldn't have to add domain name in prod. Need more research. 
    this.userInfo = await this.$http.$get(`/api/user/${this.$route.params.id}`)
      // .then(userInfo => userInfo)
  },
  head() {
    return {
      title: this.userInfo.fullname + " | CloudHired",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
    }
  }, 
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
  }, 
  methods: {
    isPageOwner: function () {
      if (this.$auth.loggedIn) {
        if (this.$auth.user.email === this.userInfo.email) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    toogleEditModal (editBtn) {
      switch(editBtn) {
        case "editBasicBtn": this.isEditBasicBtn = !this.isEditBasicBtn
        break;
        case "editBasicModal": 
        // TODO: need to remind user of unsaved editing
        this.isEditBasicBtn = !this.isEditBasicBtn
        break;

        case "editIntroBtn": this.isEditIntroBtn = !this.isEditIntroBtn
        break;
        case "editIntroModal": this.isEditIntroBtn = !this.isEditIntroBtn
        break;

        case "editSkillsBtn": this.isEditSkillsBtn = !this.isEditSkillsBtn
        break;
        case "editSkillsModal": this.isEditSkillsBtn = !this.isEditSkillsBtn
        break;

        case "editCertsBtn": this.isEditCertsBtn = !this.isEditCertsBtn
        break;
        case "editCertsModal": this.isEditCertsBtn = !this.isEditCertsBtn
        break;

        case "editPtflBtn": this.isEditPtflBtn = !this.isEditPtflBtn
        break;
        case "editPtflModal": this.isEditPtflBtn = !this.isEditPtflBtn
        break;

        case "editCoursesBtn": this.isEditCoursesBtn = !this.isEditCoursesBtn
        break;
        case "editCoursesModal": this.isEditCoursesBtn = !this.isEditCoursesBtn
        break;

        default: alert(editBtn)
      }
    }
  },
  provide: function() {
          return {
            isPageOwner: this.isPageOwner, 
            toogleEditModal: this.toogleEditModal
          };
        }

}
</script>

<style lang="scss">

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
