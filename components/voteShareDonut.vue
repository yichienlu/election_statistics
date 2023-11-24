<script setup>
const { $eChart } = useNuxtApp()
const voteShareChart = ref(null)
const data = ref([
  { value: 8170, name: 'DPP' },
  { value: 5522, name: 'KMT' },
  { value: 608, name: 'PFP' }
])
const color = ref(['#84CB98', '#8894D8','#DFA175'])

onMounted(()=>{
  const myChart = $eChart.init(voteShareChart.value)
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
      data:  data.value
    }
  ]
};


myChart.setOption(option)
})

</script>
<template>
  <div id="voteShareChart" ref="voteShareChart" class="w-32 h-32"></div>
</template>