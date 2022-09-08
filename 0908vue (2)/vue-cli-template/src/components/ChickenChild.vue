<template>
<div>

    자식입니다.
     {{$store.state.salt}} {{$store.state.title}}
      <button @click="change">간 맞추기</button>

</div>

</template>

<script>
export default {

methods:{
    change(){

        this.$store.commit("SET_MY_G", 30)
        this.$store.commit("SET_MY_NAME", "좋아해")
    }
}
   
   
}
</script>

<style>

</style>