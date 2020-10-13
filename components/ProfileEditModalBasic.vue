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
                  <input class="input is-static" type="text" :value="userInfo.lname">
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
                  <input class="input is-static" type="text" :value="userInfo.title">
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
                  <input class="input is-static" type="text" :value="userInfo.current_loc">
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
                  <input class="input is-static" type="text" :value="userInfo.company">
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
                  <input class="input is-static" type="text" :value="userInfo.yoe">
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
                  <input class="input is-static" type="text" :value="userInfo.personal_site">
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
      fname: ''
    }
  },

  methods: {
    sbtBasic: function () {
      alert(this.fname || "user has not typed")
    }
  }
}
</script>