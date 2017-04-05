<template>
  <div class="row">
    <div class="col-xs-6 col-md-3" v-for="album in albums">
      <router-link class="thumbnail" :to="{name: 'Album', params: {id: album.id}}">
        <com-image :id="album.id"></com-image>
        <div class="caption">
          <h4>{{album.name}}</h4>
          <p>{{album.count}} 張照片</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .thumbnail {
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .thumbnail .caption {
    bottom: 0;
    position: absolute;
    background: white;
    width: 100%;

  }
</style>

<script>
import comImage from '@/components/_image'
export default{
  components: {
    comImage
  },
  data: () => {
    return {
      albums: []
    }
  },
  created: function () {
    var self = this
    this.$http.get('https://graph.facebook.com/v2.8/' + this.$root.me.id + '/albums', {
      params: {
        access_token: this.$root.authResponse.access_token,
        fields: 'name,cover_photo,count'
      }
    })
    .then((result) => {
      self.albums = result.body.data
    })
  }
}
</script>