<template>
  <div class="list-group">
    <router-link class="list-group-item" to=""> {{username}}</router-link>
  </div>
</template>

<script>
export default{
  computed: {
    username: function () {
      return this.$root.me.name
    }
  }
}
</script>
<style>
</style>