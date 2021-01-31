<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isAddCertsBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a Certificate</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="select is-primary">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
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
  props: ['editModalId', 'isAddCertsBtn', 'userInfo'], 

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