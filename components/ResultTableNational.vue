<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const data_national = ref({})
const party_color = {
    DPP:{normal:"#84CB98",light:"#edf7f0"},
    KMT:{normal:"#8894D8",light:"#dadef3"},
    PFP:{normal:"#DFA175",light:"#f5e2d4"},
  }

let arr = JSON.parse(JSON.stringify(areaStore.data['2020'].votes))
arr.sort((a,b)=>b.votes-a.votes)
data_national.value = arr

data_national.value.map((item,index)=>{
  let party = areaStore.data['2020'].candidates[item.no-1].party
  data_national.value[index].color = party_color[party]
})

</script>
<template>
  <div>
    <table style="width:100%">
      <tr class=""  v-for="item in data_national" :key="item.no">
        <td class="align-top py-1">
          <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] text-white" :style="{backgroundColor:item.color.normal}">{{item.no}}</div>
        </td>
        <td class="py-1">
          <div class="px-3 mb-3 border-r-2" :style="{borderColor:item.color.normal}">
            <div class="font-bold">{{ areaStore.data['2020'].candidates[item.no-1].party_full }}</div>
            <div class="text-[12px]">{{ areaStore.data['2020'].candidates[item.no-1].president }} | {{ areaStore.data['2020'].candidates[item.no-1].vicePresident }}</div>
          </div>
        </td>
        <td class="pl-5 mb-3">
          <div class="font-bold">{{ (item.votes / areaStore.data['2020'].votes_valid * 100).toFixed(1) }} %</div>
          <div class="text-[12px] mb-3">{{item.votes.toLocaleString("en-US")}} 票</div>
        </td>
      </tr>                
    </table>
  </div>
</template>