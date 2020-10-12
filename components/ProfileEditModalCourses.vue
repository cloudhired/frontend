<template>
  <div :id="editModalId" v-bind:class="{'modal':true, 'is-active':isEditCoursesBtn}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Courses</p>
        <button v-on:click="toogleEditModal(editModalId)" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <p>Courses</p>
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
  inject: ["isPageOwner", "toogleEditModal"],
  props: ['editModalId', 'isEditCoursesBtn']
}
</script>