<script setup>
  // https://apexcharts.com/docs/chart-types/pie-donut/

  const voteRateSeries = ref([14300940, 4610310])
  const voteRateOptions = ref({
    chart: {
      // type: 'donut',
      width:120, // not working
      height: '100%', // not working
    },
    tooltip:{
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ['#262E49', '#CCCCCC'],
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
  <div id="voteRateChart" class="w-32 h-32 bg-red-500">
    <apexchart type="donut" :options="voteRateOptions" :series="voteRateSeries"></apexchart>
  </div>
</template>