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
                  <input v-model="fname" class="input is-static" type="text" :placeholder="userInfo.fname" autofocus>
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
                  <input v-model="lname" class="input is-static" type="text" :placeholder="userInfo.lname">
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
                  <input class="input is-static" type="text" :placeholder="userInfo.title">
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
                  <input v-model="current_loc" class="input is-static" type="text" :placeholder="userInfo.current_loc">
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
                  <input v-model="company" class="input is-static" type="text" :placeholder="userInfo.company">
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
                  <input v-model="yoe" class="input is-static" type="text" :placeholder="userInfo.yoe">
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
                  <input v-model="personal_site" class="input is-static" type="text" :placeholder="userInfo.personal_site">
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
  inject: ["isPageOwner", "toogleEditModal"],
  props: ['editModalId', 'isEditBasicBtn', 'userInfo'], 

  data() {
    return {
      fname: '', 
      lname: '',
      title: '',
      current_loc: '',
      company: '',
      yoe: '',
      personal_site: '',
      basicInfo: {}
    }
  },

  methods: {
    sbtBasic: async function () {
      this.fname ? this.basicInfo.fname = this.fname : null;
      this.lname ? this.basicInfo.lname = this.lname : null; 
      this.title ? this.basicInfo.title = this.title : null;
      this.current_loc ? this.basicInfo.current_loc = this.current_loc : null; 
      this.company ? this.basicInfo.company = this.company : null; 
      this.yoe ? this.basicInfo.yoe = this.yoe : null; 
      this.personal_site ? this.basicInfo.personal_site = this.personal_site : null;
      if (this.isPageOwner() && Object.keys(this.basicInfo).length != 0) {
        await this.$http.$post(`/api/user/${this.$route.params.id}`, this.basicInfo)
        .then(() => {
          console.log("Finished")
          this.toogleEditModal(this.editModalId)
          this.userInfo.current_loc = this.current_loc
        }, () => {
          console.log("Failed")
        })
      }
    }
  }
}
</script>