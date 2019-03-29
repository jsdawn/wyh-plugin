<template>
  <div class="walert"
       v-if="show">
    我是支付页面
  </div>
</template>

<script>
export default {
  name: 'walert',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  model: {
    prop: 'show',
    event: 'change'
  }
}
</script>

<style scope>
.walert {
  position: fixed;
  top: 20px;
  left: 20px;
  background: red;
  color: #fff;
}
</style>
