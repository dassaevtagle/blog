<template>
  <button class="btn border border-white bg-b-green capitalize" @click="changeMode">
      {{ buttonLabel }}
  </button>
</template>

<script lang="ts">
export default {
  computed: {
      buttonLabel(): string {
        return this.$colorMode.preference === 'light' ? 'dark' : 'light'
      }
  },
  methods: {
    changeMode() {
      console.log(this.$colorMode.preference)
      this.$colorMode.preference = 
            this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>