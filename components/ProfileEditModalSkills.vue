<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isEditSkillsBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Skills</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field is-grouped mx-4 mb-4">
          <input v-model="skillToAdd" class="input is-small mr-2" type="text" placeholder="Type a skill you have here">
          <button v-on:click="addSkill()" class="button is-small">Add Skill</button>
        </div> 
        <div class="field is-grouped is-grouped-multiline mx-4 my-4">
          <div class="control" v-for="skill in skills" v-bind:key="skill">
              <div class="tags has-addons">
              <a class="tag is-link"> {{ skill }} </a>
              <a v-on:click="delSkill(skill)" class="tag is-delete"></a>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button v-on:click="sbtskillss()" class="button is-primary">Save changes</button>
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
      skillToAdd: '', 
      skills: this.userInfo.skills, 
      skillsInfo: {}
    }
  },

  methods: {
    delSkill: function (skill) {
      const index = this.skills.indexOf(skill);
        if (index > -1) {
          this.skills.splice(index, 1);
        }
    },
    addSkill: function () {
      const index = this.skills.indexOf(this.skillToAdd);
        if (index == -1) {
          this.skills.push(this.skillToAdd);
        }
      console.log(this.skills)
    },
    sbtSkillss: function () {
      console.log("it is a function")
    },
    sbtSkills: async function () {
      if (this.isPageOwner()) {
        // TODO: since var like `skills` has initial value (not null ever), need to change the logic to check if changed. 
        this.skills ? this.skillsInfo.skills = this.skills : null;
        // submit change if info is changed
        if (Object.keys(this.skillsInfo).length != 0) {
          let payload = {}
          payload.email = this.userInfo.email 
          payload.setInfo = this.skillsInfo
          console.log(payload)
          await this.$http.$post(`/api/user/${this.$route.params.id}`, payload)
          .then((res) => {
            console.log("Finished", res)
            if (res.error == null ) {
              this.toogleEditModal(this.editModalId)
              this.updateUserInfo(this.skillsInfo)
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