<template>
  <div>
    <div class="panel panel-default" v-for="post in posts">
      <div class="panel-heading">{{post.created_time}}</div>
      <div class="panel-body">
        {{post.message}}
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data: () => {
    return {
      posts: []
    }
  },
  created: function () {
    var self = this
    this.$http.get('https://graph.facebook.com/v2.8/me/posts', {
      params:  {
        access_token: this.$root.authResponse.access_token
      }
    })
    .then((result) => {
      self.posts = result.body.data
    })
  }
}
</script>
