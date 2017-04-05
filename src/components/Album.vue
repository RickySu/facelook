<template>
  <div class="row">
    <div class="page-header">
      <h1>{{albumName}} <router-link :to="{name: 'Albums'}"><small>返回相簿</small></router-link></h1>
    </div>
    <div class="col-sm-6 col-md-4" v-for="photo in photos">
      <div class="thumbnail">
        <com-image :id="photo.id" />
      </div>
    </div>
  </div>
</template>

<script>
import comImage from '@/components/_image.vue'
export default{
  components:{
    comImage
  },
  data: () => {
    return {
      albumName: null,
      photos: []
    }
  },
  created: function(){
    var self = this
    this.$http.get('https://graph.facebook.com/v2.8/' + this.$route.params.id, {
      params: {
        access_token: this.$root.authResponse.access_token
      }
    })
    .then((result) => {
      self.albumName = result.body.name
    })
    this.$http.get('https://graph.facebook.com/v2.8/' + this.$route.params.id + '/photos', {
      params: {
        access_token: this.$root.authResponse.access_token
      }
    })
    .then((result) => {
      self.photos = result.body.data
    })
  }
}
</script>