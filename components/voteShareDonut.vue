<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const { $eChart } = useNuxtApp()
const voteShareChart = ref(null)


const party_color = {
  "DPP":"#84CB98",
  "KMT":"#8894D8",
  "PFP":"#DFA175"
}
onMounted(()=>{
  let data_national = JSON.parse(JSON.stringify(areaStore.data_national))
  
  let data = []
  data_national.map((item, index)=>{
    data[index]= {value: item.votes, name:item.candidate.party}
  })


  let color = []
  data_national.map((item, index)=>{
    color[index] = item.candidate.party_color.normal
  })

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
      color: color,
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
      data:  data
    }
  ]
};


myChart.setOption(option)
})

</script>
<template>
  <div id="voteShareChart" ref="voteShareChart" class="w-32 h-32"></div>
</template>