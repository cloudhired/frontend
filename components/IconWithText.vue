<template>
  <span :style="{ 'height': height }">
    <span style="vertical-align: middle;" class="icon"><fa :icon="[ iconType, icon ]"/></span>   
    <span style="vertical-align: middle;"> {{ text }} </span>
  </span>
</template>

<script>
export default {
  props: ['height', 'iconType', 'icon', 'text'], 
}
</script>