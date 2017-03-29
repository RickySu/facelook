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
  },
  methods: {
    facebookLogin: function(){
      var me = this
      hello.login('facebook', {
        scope: 'email,user_photos'
      })
      .then(() => {
        me.$root.authResponse = hello('facebook').getAuthResponse()
        return me.$http.get("https://graph.facebook.com/v2.8/me", {
          params: {
            fields: "id,name,email",
            access_token: me.$root.authResponse.access_token
          }
        })
      })
      .then((result) => {
        me.$root.me = result.body
      })
    }
  }
}
</script>