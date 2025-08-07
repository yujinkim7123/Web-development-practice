<template>
  <div>
    <h1>hello vue.js</h1>
    <Header></Header>
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>
