<template>
  <div class="list-group">
    <router-link class="list-group-item" to=""><img :src="avatar" /> {{username}}</router-link>
    <a @click.prevent="signOut" href="" class="list-group-item"><i class="fa fa-sign-out"></i> 登出</a>
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
  },
  methods: {
    signOut: function(){
      this.$root.me = null
      this.$root.authResponse = null
      window.sessionStorage.removeItem('me')
      window.sessionStorage.removeItem('authResponse')
    }
  }
}
</script>

<style>
img {
  width: 24px;
  margin-right: 20px;
}
.list-group-item {
  font-size: 24px;
}
.list-group-item >i {
  margin-right: 20px;
}
</style>