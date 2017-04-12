<template>
  <div class="jumbotron">
    <h1>請點選登入 Facebook!</h1>
    <p><button @click.prevent="facebookLogin" class="btn btn-primary btn-lg"><i class="fa fa-facebook"></i> 登入 Facebook</button></p>
  </div>
</template>

<script>
import hello from 'hellojs/dist/hello.all.js'
export default {
  created: function(){
    hello.init({
      facebook: '1314748098607534'
    })

    this.$root.me = this.loadSession('me')
    if(this.$root.me != null){
      this.$root.authResponse = this.loadSession('authResponse')
    }

  },
  methods: {
    storeSession: function(key, value){
      window.sessionStorage.setItem(key, JSON.stringify(value))
    },
    loadSession: function(key){
      var value = window.sessionStorage.getItem(key)
      if(value === void 0){
        return null
      }
      return JSON.parse(value)
    },
    facebookLogin: function(){
      var me = this
      hello.login('facebook', {
        scope: 'email,user_photos,user_posts'
      })
      .then(() => {
        me.$root.authResponse = hello('facebook').getAuthResponse()
        me.storeSession('authResponse', me.$root.authResponse)
        return me.$http.get("https://graph.facebook.com/v2.8/me", {
          params: {
            fields: "id,name,email",
            access_token: me.$root.authResponse.access_token
          }
        })
      })
      .then((result) => {
        me.$root.me = result.body
        me.storeSession('me', me.$root.me)
      })
    }
  }
}
</script>