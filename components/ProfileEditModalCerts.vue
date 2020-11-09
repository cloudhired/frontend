<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isEditCertsBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Certs</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <ul class="p-m">
          <li v-for="cert in userInfo.certs" :key="cert" class="my-3">
            <div v-if="isInEdit" class="field is-grouped" style="text-align:center; height:32px">
              <figure class="image is-32x32"><img src="https://bulma.io/images/placeholders/48x48.png"></figure>
              <span class="ml-2" style="width:90%"> {{ cert.cert_name }} </span>
              <span class="width:10%"><a v-show="isPageOwner()" > Edit </a></span>
            </div>
            <div v-else class="field is-grouped">
              <figure class="image is-32x32"><img src="https://bulma.io/images/placeholders/48x48.png"></figure>
              <input class="input is-small ml-2">
              <span class="width:10%"><a v-show="isPageOwner()" > Edit </a></span>
            </div>
          </li>
        </ul>
        <div class="field is-grouped mb-4">
          <input class="input is-small mr-2" type="text" placeholder="Type your certification name">
          <button class="button is-small">Add Certificate</button>
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
  props: ['editModalId', 'isEditCertsBtn', 'userInfo'], 

  data() {
    return {
      isInEdit: false, 




      
    }
  },
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