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
// const color = ref(['#84CB98', '#8894D8','#DFA175'])

onMounted(()=>{
  let data = JSON.parse(JSON.stringify(areaStore.data['2020'].votes.sort((a,b)=>b.votes - a.votes)))
  data.map((item, index)=>{
    data[index]= {value: item.votes, name:item.no}
  })

  let color = []
  data.map((item, index)=>{
    let party = areaStore.data['2020'].candidates[item.name-1].party
    color[index] = party_color[party]
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