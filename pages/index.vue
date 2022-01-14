<template>
  <div>
    <TipTap />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async mounted() {
    try {
      let test = await this.$axios.$get(("api/test"))
      console.log(test)
    } catch {

    }
  }
})
</script>
