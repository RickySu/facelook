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
      console.log(this.message)
    }
  }
}
</script>