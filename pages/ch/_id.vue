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
              <ul class="profile mt-1">
                <li> {{ user.name }} </li>
                <li> Software Engineer </li>
              </ul>
            </div>
          </div>
          <div class="profile basic right">
            <ul class="profile">
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
            <strong> Introduction </strong>
          </div>
          <div class="profile t">
            <p> Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. Hi my name is Morgan Gao and I am a software engineer. </p>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <strong> Skills </strong>
          </div>
          <div class="profile t">
            <p> Here are the skills I have. Render skills with tag like label </p>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <strong> Certifications </strong>
          </div>
          <div class="profile t">
            <p> Certifications I have got so far. Use ul li to present </p>
          </div>
        </div>
        <div class="container profile block">
          <div class="profile t">
            <strong> Courses </strong>
          </div>
          <div class="profile t">
            <p> The courses I have taked to sharpen my skills </p>
          </div>
        </div><div class="container profile block">
          <div class="profile t">
            <strong> Porfilio </strong>
          </div>
          <div class="profile t">
            <p> Check what I have done so far. </p>
            <p> and also my GitHub activity. </p>
          </div>
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

.profile li {
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
  text-align: left;
  margin: 1.5rem;
}



</style>
