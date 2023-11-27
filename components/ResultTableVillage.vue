<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const data_village = ref({})
const candidates = ref(areaStore.data?.['2020'].candidates)

const party_color = {
  DPP:{normal:"#84CB98",light:"#edf7f0"},
  KMT:{normal:"#8894D8",light:"#dadef3"},
  PFP:{normal:"#DFA175",light:"#f5e2d4"},
}
let arr = JSON.parse(JSON.stringify(areaStore.data['2020'].counties[areaStore.selectedCounty].districts[areaStore.selectedDistrict].villages[areaStore.selectedVillage].votes))
arr.sort((a,b)=>b.votes-a.votes)
data_village.value = arr

data_village.value.map((item,index)=>{
  let party = areaStore.data['2020'].candidates[item.no -1].party
  data_village.value[index].color = party_color[party]
})

let total = areaStore.data['2020'].counties[areaStore.selectedCounty].districts[areaStore.selectedDistrict].villages[areaStore.selectedVillage].votes_total

// let arr = JSON.parse(JSON.stringify(areaStore.data['2020'].counties[areaStore.selectedCounty].districts[areaStore.selectedDistrict].villages[areaStore.selectedVillage].village_total))
// arr?.shift()
// let total=0
// arr.forEach((item)=>{total += item.votes})
// data_district.value = {list:arr.sort((a,b)=>b.votes-a.votes), total}


</script>
<template>
  <div  class="px-5 py-3 border-2 rounded-lg w-auto  whitespace-nowrap mb-5" :style="{borderColor:data_village[0].color.normal, backgroundColor:data_village[0].color.light}">
    <h3 class="font-bold text-xl mb-3">{{ areaStore.selectedVillage }}</h3>
    <table style="width:100%">
      <tr class=""  v-for="item in data_village" :key="item.no">
        <td class="align-top py-1">
          <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] text-white" :style="{backgroundColor:item.color.normal}">{{item.no}}  </div>
        </td>
        <td class="py-1">
          <div class="px-3 mb-3 border-r-2 " :style="{borderColor:item.color.normal}">
            <div class="font-bold">{{ candidates[item.no-1].party_full }}</div>
            <div class="text-[12px]">{{ candidates[item.no-1].president }} | {{ candidates[item.no-1].vicePresident }}</div>
          </div>
        </td>
        <td class="pl-5 mb-3">
          <div class="font-bold">{{ (item.votes / total * 100).toFixed(1) }} %</div>
          <div class="text-[12px] mb-3">{{item.votes}} 票</div>
        </td>
      </tr>                
    </table>
  </div>
</template>