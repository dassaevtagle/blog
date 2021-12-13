<template>
  <div>
    <Tutorial/>
    <Tip-tap />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TipTap from '~/components/TipTap.vue'

export default Vue.extend({
  components: { TipTap },
  async mounted() {
    try {
      let test = await this.$axios.$get(("api/test"))
      console.log(test)
    } catch {

    }
  }
})
</script>
