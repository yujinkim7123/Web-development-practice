<template>
  <div>

    <FFF></FFF>
    <reactive-bar-chart
    style="width:40vw;"
    v-if="chartData"
    :chart-data="chartData">
    </reactive-bar-chart>
  </div>
</template>

<script>
import ReactiveBarChart from "../components/ReactiveBarChart.js";
import { mapState, mapActions }from "vuex"
import FFF from '../components/asdfa.vue'

export default {
  name: "App",

  components: {
    ReactiveBarChart,
    FFF
  },

  data(){
    return {
     
      };
  },
  computed:{
    ...mapState(['chartData'])

  },
  methods: {
   ...mapActions(["generateChartData"])
  },
  async mounted()
  {
    this.generateChartData();
  }
}
</script>

<style>

</style>