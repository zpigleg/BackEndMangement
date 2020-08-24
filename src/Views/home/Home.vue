<template>
    <div>
        <h1>首页</h1>
        {{ count }}
        <button @click="handleIncrement">+1</button>
        <button @click="handleDecrease">-1</button>
        <button @click="handleIncrementMore">+5</button>
        <router-link to="/about">跳转到about</router-link>
        <div> {{ list }} </div>
    </div>
</template>

<script>
    export default {
        computed:{
          count (){
            return this.$store.state.count;
          }
        },
        methods:{
          handleIncrement (){
            this.$store.commit('increment');
          },
          handleDecrease(){
            this.$store.commit('decrease');
          },
          handleIncrementMore(){
            this.$store.commit('increment',5);
          }
        },
    }
</script>

<style scoped>

</style>
