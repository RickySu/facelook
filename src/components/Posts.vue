<template>
  <div>
    <com-post v-on:sync-posts="readPosts"></com-post>
    <div class="panel panel-default" v-for="post in posts">
      <div class="panel-heading">{{post.created_time|moment('YYYY 年 M 月 D 日 HH:mm:ss')}}</div>
      <div class="panel-body">
        {{getMessage(post)}}
      </div>
    </div>
  </div>
</template>

<script>
import comPost from '@/components/_post.vue'
export default{
  components:{
    comPost
  },
  methods: {
    getMessage: function (post) {
      if (typeof post.story != 'undefined') {
        return post.story
      }
      return post.message
    },
    readPosts: function(){
      var self = this
      this.$http.get('https://graph.facebook.com/v2.8/me/posts', {
        params:  {
          access_token: this.$root.authResponse.access_token
        }
      })
      .then((result) => {
        self.posts = result.body.data
      })
      return true
    }
  },
  data: () => {
    return {
      posts: []
    }
  },
  created: function () {
    this.readPosts()
  }
}
</script>
