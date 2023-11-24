<script setup>
const { $eChart } = useNuxtApp()
const voteRateChart = ref(null)
const data = ref([
  { value: 1048, name: 'Search Engine' },
  { value: 300, name: 'Video Ads' }
])
const color = ref(['#262E49', '#CCCCCC'])

onMounted(()=>{
  const myChart = $eChart.init(voteRateChart.value)
  const option = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '100%'],
      color: color.value,
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
        scale: false
      },
      labelLine: {
        show: false
      },
      data: data.value
    }
  ]
};


myChart.setOption(option)
})

</script>
<template>
  <div id="voteRateChart" ref="voteRateChart" class="w-32 h-32"></div>
</template>