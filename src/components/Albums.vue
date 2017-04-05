<template>
  <div class="row">
    <div class="col-xs-6 col-md-3" v-for="album in albums">
      <a class="thumbnail">
        <img :src="'https://graph.facebook.com/v2.8/' + album.id + '/picture?access_token=' + $root.authResponse.access_token" />
        <div class="caption">
          <h4>{{album.name}}</h4>
          <p>{{album.count}} 張照片</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default{
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