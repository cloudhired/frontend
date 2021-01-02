<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isEditCertsBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Certs</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>

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