<template>
  <div>
    {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "ButtonPush",
    data() {
      return {
        msg: 'Button Push'
      }
    }
  }
</script>

<style scoped>

</style>
