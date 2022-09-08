<template>
  
  <div>

    조부모입니다. {{$store.state.salt}} {{$store.state.title}}
    <Fried></Fried>


  </div>
</template>

<script>
import Fried from './components/FriedChicken.vue'

export default {

components:{
    Fried,
},



}
</script>

<style>

</style>