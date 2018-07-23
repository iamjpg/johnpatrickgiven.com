<template>
  <div id="backbtn" v-on:click="goBack()">
    <i class="fa fa-long-arrow-left" aria-hidden="true"></i> home
  </div>
</template>

<script>
  export default {
    name: 'BackBtn',
    data() {
      return {}
    },
    methods: {
      goBack: function() {
        this.$router.push({ name: 'home'})
      }
    }
  }
</script>

<style>
  #backbtn {
    background: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  #backbtn:hover {
    background: #e5e5e5;
  }
</style>
