<template>
  <form class="form-horizontal">
    <div class="form-group">
      <label class="control-label">建立貼文</label>
      <textarea class="form-control" rows="3" v-model="message"></textarea>
    </div>
    <div class="form-group">
      <div class="pull-right">
        <button @click.prevent="send" type="submit" class="btn btn-primary btn-lg">送出</button>
      </div>
    </div>
  </form>
</template>

<script>
export default{
  data: () => {
    return {
      message: ''
    }
  },
  methods: {
    send: function(){
      //api reference https://developers.facebook.com/docs/graph-api/reference/v2.8/user/feed
      var self = this
      this.$http.post("https://graph.facebook.com/v2.8/me/feed",
        {
          message: this.message
        },
        {
          emulateJSON: false,
          params:  {
            access_token: this.$root.authResponse.access_token
          }
        }
      )
      .then(() => {
        self.post = null
        self.$root.$emit('sync.posts')
      })
    }
  }
}
</script>