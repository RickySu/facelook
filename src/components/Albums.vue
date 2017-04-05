<template></template>

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
      me.albums = result.body.data
    })
  }
}
</script>