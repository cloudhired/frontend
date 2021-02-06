<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isAddCertsBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a Certificate</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="select is-primary" style="width:100%">
          <select v-model="selectedCert" style="width:100%">
            <option disabled value=""> Select one certification </option>
            <option v-for="cert in certs.results" :key="cert.id" v-bind:value="cert"> {{ cert.name }} </option>
          </select>
        </div>
        <div class="mt-1" style="width:100%">
          <input v-model="certURL" class="input is-primary" type="text" placeholder="https://">
        </div>
      </section>

      <footer class="modal-card-foot">
        <button v-on:click="sbtCerts()" class="button is-success">Save changes</button>
        <button v-on:click="toogleEditModal(editModalId)" class="button">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["isPageOwner", "toogleEditModal", "updateUserInfo"],
  props: ['editModalId', 'isAddCertsBtn', 'userInfo'], 

  data() {
    return {
      selectedCert: '',
      certURL: '',
      isInEdit: false, 
      certs: [],
      currentCerts: this.userInfo.certs || [],
      certsInfo: {}
    }
  },
  async fetch() {
    this.certs = await this.$http.$get(`https://api.cloudhired.com/api/allcerts`)
  }, 
  methods: {
    sbtCerts: async function () {
      if (this.isPageOwner() && this.selectedCert !== '') {
        this.currentCerts.push({ "cert_id": this.selectedCert.id, "cert_name": this.selectedCert.name, "verify_link": this.certURL })
        this.certsInfo.certs = this.currentCerts
        await this.$jwtPost(`api/username/${this.userInfo.username}`, this.certsInfo)
          .then((res) => {
            console.log("Finished", res)
            if (res.error == null ) {
              this.toogleEditModal(this.editModalId)
              this.updateUserInfo(this.certsInfo)
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
</script>

<style lang="scss">
.p-m li {
  // height: 32px;
  border-bottom: $main-border-style;
}
.p-m span {
  margin: auto 0; 
  text-align: left;
}
</style>