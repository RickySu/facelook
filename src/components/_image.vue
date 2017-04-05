<template>
  <img :src="imgSrc"/>
</template>

<script>
export default{
  props: ['id'],
  computed: {
    imgSrc: function () {
      return 'https://graph.facebook.com/v2.8/' + this.id + '/picture?access_token=' + this.$root.authResponse.access_token
    }
  }
}
</script>