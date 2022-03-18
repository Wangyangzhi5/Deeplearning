<template>
  <div>
    <navBar testcontent="fuck"/>
    <Nuxt />
  </div>
</template>

<script>
import navBar from '../components/NavSide.vue'
export default {
  components: {
    navBar,
  },
}
</script>
