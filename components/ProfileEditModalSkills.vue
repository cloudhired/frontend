<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isEditSkillsBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Skills</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field is-grouped is-grouped-multiline mx-4 my-4">
          <div class="control" v-for="skill in userInfo.skills" v-bind:key="skill">
              <div class="tags has-addons">
              <a class="tag is-link"> {{ skill }} </a>
              <a class="tag is-delete"></a>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button v-on:click="toogleEditModal(editModalId)" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["isPageOwner", "toogleEditModal", "updateUserInfo"],
  props: ['editModalId', 'isEditSkillsBtn', 'userInfo'], 

  data() {
    return {
      intro: this.userInfo.intro, 
      introInfo: {}
    }
  },

  methods: {
    sbtIntro: async function () {
      //TODO: validate each blank
      if (this.isPageOwner()) {
        this.intro ? this.introInfo.intro = this.intro : null;
        // submit change if basic info is not null
        if (Object.keys(this.introInfo).length != 0) {
          let payload = {}
          payload.email = this.userInfo.email 
          payload.setInfo = this.introInfo
          console.log(payload)
          await this.$http.$post(`/api/user/${this.$route.params.id}`, payload)
          .then((res) => {
            console.log("Finished", res)
            if (res.error == null ) {
              this.toogleEditModal(this.editModalId)
              this.updateUserInfo(this.introInfo)
            } else {
              // TODO: remind user of error when updating
              alert("not successful")
            }

          }, () => {
            console.log("Failed")
          })
        }
      }
    }
  }
}
</script>