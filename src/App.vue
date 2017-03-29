<template>
  <div class="container">
    <div class="row">
      <com-menu class="col-xs-3"></com-menu>
      <router-view class="col-xs-9"></router-view>
    </div>
  </div>
</template>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="font-awesome/css/font-awesome.css"></style>

<script>
import comMenu from '@/components/_menu.vue'
export default {
  name: 'app',
  components: {
    comMenu
  }
}
</script>
