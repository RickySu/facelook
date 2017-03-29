<template>
  <div class="list-group">
    <router-link class="list-group-item" to=""><img :src="avatar" /> {{username}}</router-link>
  </div>
</template>

<script>
export default{
  computed: {
    username: function() {
      return this.$root.me.name
    },
    avatar: function() {
      return 'https://graph.facebook.com/' + this.$root.me.id + '/picture?type=square&width=128&height=128'
    }
  }
}
</script>

<style>
img {
  width: 24px;
  margin-right: 20px;
}
</style>