<template>
  <div class="stats">
    <h1>Statistiques commandes</h1>
    <div class="row">
      <div class="col">
        <div class="row"><p>Commandes<br>Aujourd'hui</p></div>
        <div class="row stat_no"><p>1</p></div>
      </div>
      <div class="col">
        <div class="row"><p>Commandes<br>Hier</p></div>
        <div class="row stat_no"><p>2</p></div>
        </div>
      <div class="col">
        <div class="row"><p>Commandes<br>Hebdomadaire</p></div>
        <div class="row stat_no"><p>3</p></div>
        </div>
      <div class="col">
        <div class="row"><p>Commandes<br>Totales</p></div>
        <div class="row stat_no"><p>4</p></div>
        </div>
    </div>
  </div>
</template>

<style>
.stats {
  width: 50%;
  margin-top: 15vh;
  margin-left: auto;
  margin-right: auto;
}
.stat_no{
    font-size: 60px;
    text-align: center !important;
}
.row{
    min-height: 50px;
    text-align: center !important;
}
</style>
<!--
<script>



import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'bar-chart',
  data: () => ({
    chartdata: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
-->