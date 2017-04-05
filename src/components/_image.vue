<template>
  <img :src="'https://graph.facebook.com/v2.8/' + id + '/picture?access_token=' + $root.authResponse.access_token" />
</template>

<script>
  export default{
    props: ['id']
  }
</script>