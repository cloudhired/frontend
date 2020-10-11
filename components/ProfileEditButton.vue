<template>
  <div :id="editBtnId" style="text-align:right; min-height:1.5rem">
    <a v-show="isPageOwner()" v-on:click="alert(`hello from child component: ${editBtnId}`)" ><span class="icon mx-1"><fa icon="edit"/></span></a>
  </div>
</template>


<script>
export default {
  inject: ["isPageOwner", "alert"],
  props: ['editBtnId']
}
</script>