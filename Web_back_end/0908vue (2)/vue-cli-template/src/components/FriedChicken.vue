<template>
  <div>
    부모입니다.
    {{$store.state.salt}} {{$store.state.title}}
    <Chickenchild></Chickenchild>
    </div>
</template>

<script>

import Chickenchild from './ChickenChild.vue'


export default {

    components:{
        Chickenchild
    },
  
}
</script>

<style>

</style>