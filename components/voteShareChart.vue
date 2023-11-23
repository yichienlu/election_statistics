<script setup>
  // https://apexcharts.com/docs/chart-types/pie-donut/

  const voteShareSeries = ref([8170, 5522, 608])
  const voteShareColors = ['#84CB98', '#8894D8','#DFA175']
  const voteShareOptions = ref({
    chart: {
      // type: 'donut',
      width: 120, // not working
      height: '100%', // not working
    },
    tooltip:{
      enabled: false
    },
    legend: {
      show: false
    },
    colors: voteShareColors,
    dataLabels:{
      enabled: false
    },
    plotOptions:{
      // pie:{
      //   expandOnClick: false,
      // },
      donut: { // not working
        size: '80%',
        background: '#F00',
      }
    },
    stroke:{
      show:false
    },
    states:{
      hover:{
        filter:{
          type:'none'
        }
      },
      active:{
        filter:{
          type:'none'
        }
      }
    }
  })
</script>
<template>
  <div id="voteShareChart" class="w-32 h-32 bg-red-500">
    <apexchart type="donut" :options="voteShareOptions" :series="voteShareSeries"></apexchart>
  </div>
</template>