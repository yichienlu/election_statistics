<script setup>
const { $eChart } = useNuxtApp()
const voteRateChart = ref(null)

import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const color = ref(['#262E49', '#CCCCCC'])

onMounted(()=>{
  const data = ref([
  { value: areaStore.data['2020'].votes_total, name: '投票數' },
  { value: areaStore.data['2020'].electors-areaStore.data['2020'].votes_total, name: '未投票數' }
])

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
