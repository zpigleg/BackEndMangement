<template>
  <div>
    <router-view></router-view>
    <p>
      <img src="../images/viva la vida.jpg" style="width:auto; height: auto;">
    </p>
  </div>
</template>

<script>
  //导入组件
  import vTitle from './components/title.vue';
  import vButton from './components/button.vue';

export default {
  components:{
    vTitle,
    vButton
  },
  methods:{
    handleClick (e){
      console.log(e);
    }
  }
}
</script>

<style>
  div{
    color: #f60;
    font-size: 24px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
