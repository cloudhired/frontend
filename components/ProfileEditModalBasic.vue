<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isEditBasicBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Editing Basic Information</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div style="width:80%">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"><span>First&nbsp;Name:</span></label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="fname" class="input is-static" type="text">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"><span>Last&nbsp;Name:</span></label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="lname" class="input is-static" type="text">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"><span>Title:</span></label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="job_title" class="input is-static" type="text">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"><span>Lives&nbsp;in:</span></label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="current_loc" class="input is-static" type="text">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"><span>Works&nbsp;at:</span></label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="company" class="input is-static" type="text">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"><span>Year of Experience:</span></label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="yoe" class="input is-static" type="text">
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label"><span>Website:</span></label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input v-model="personal_site" class="input is-static" type="text">
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <footer class="modal-card-foot">
        <button v-on:click="sbtBasic()" class="button is-primary">Save changes</button>
        <button v-on:click="toogleEditModal(editModalId)" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["isPageOwner", "toogleEditModal", "updateUserInfo"],
  props: ['editModalId', 'isEditBasicBtn', 'userInfo'], 

  data() {
    return {
      fname: this.userInfo.fname, 
      lname: this.userInfo.lname,
      job_title: this.userInfo.job_title,
      current_loc: this.userInfo.current_loc,
      company: this.userInfo.company,
      yoe: this.userInfo.yoe,
      personal_site: this.userInfo.personal_site,
      basicInfo: {}
    }
  },

  methods: {
    sbtBasic: async function () {
      //TODO: validate each blank
      if (this.isPageOwner()) {
        this.fname ? this.basicInfo.fname = this.fname : null;
        this.lname ? this.basicInfo.lname = this.lname : null; 
        this.job_title ? this.basicInfo.job_title = this.job_title : null;
        this.current_loc ? this.basicInfo.current_loc = this.current_loc : null; 
        this.company ? this.basicInfo.company = this.company : null; 
        this.yoe ? this.basicInfo.yoe = this.yoe : null; 
        this.personal_site ? this.basicInfo.personal_site = this.personal_site : null;
        // submit change if basic info is not null
        if (Object.keys(this.basicInfo).length != 0) {
          let payload = {}
          payload.email = this.userInfo.email 
          payload.setInfo = this.basicInfo
          console.log(payload)
          await this.$http.$post(`/api/user/${this.$route.params.id}`, payload)
          .then((res) => {
            console.log("Finished", res)
            if (res.error == null ) {
              this.toogleEditModal(this.editModalId)
              this.updateUserInfo(this.basicInfo)
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