<template>
  <section class="section profile" style="height: 100vh;">
    <div class="fetching-holder">
      {{ msg }}
    </div>
  </section>
</template>


<script>
export default {
  props: ['msg']
}
</script>

<style lang="scss">

.fetching-holder {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}

</style>