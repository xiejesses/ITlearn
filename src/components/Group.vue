<template>
    <div class="group">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'group',
  data () {
    return {
      msg: '学习小组'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
}
</style>
