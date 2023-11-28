<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const map_arr = JSON.parse(JSON.stringify(Object.values(areaStore.data['2020'].counties)))
map_arr.map((item, index)=>{
  item.votes.sort((a,b)=>b.votes-a.votes)
  map_arr[index].party = areaStore.data['2020'].candidates[item.votes[0].no - 1].party
  map_arr[index].percentage = (item.votes[0].votes / item.votes_total*100).toFixed(2)
  console.log(item.id, map_arr[index].party, map_arr[index].percentage)
})

const party_color = {
    DPP:{normal:"#84CB98",light:"#edf7f0"},
    KMT:{normal:"#8894D8",light:"#dadef3"},
    PFP:{normal:"#DFA175",light:"#f5e2d4"},
  }
const selectCounty = (county) => {
  areaStore.villagesList = []
  areaStore.selectedDistrict = ''
  areaStore.selectedVillage = ''
  areaStore.selectedCounty = county
  areaStore.data_district = {}
  areaStore.data_village = {}
  areaStore.districtsList = Object.values(areaStore.data['2020'].counties[county].districts)

  let arr = JSON.parse(JSON.stringify(areaStore.data['2020'].counties[areaStore.selectedCounty].votes))
  arr.sort((a,b)=>b.votes-a.votes)
  areaStore.data_county = arr
  areaStore.data_county.map((item,index)=>{
    let party = areaStore.data['2020'].candidates[item.no -1].party
    areaStore.data_county[index].color = party_color[party]
  })

}





</script>
<template>
  <div class="container mx-auto px-6">
    <svg viewBox="0 0 510 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path v-for="item in map_arr" 
      :key="item" class="area" :id="item.id" :value="item.id" @click="selectCounty(item.id)"
      :class="{
        'DPP':item.party=='DPP', 'KMT':item.party=='KMT','PFP':item.party=='PFP', 
        'high':item.percentage>62, 'mid':item.percentage>55 && item.percentage <62, 'low':item.percentage<55 ,
        'selected':item.id==areaStore.selectedCounty
      }" :d="item.map_d" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
path{
  cursor: pointer;
}
.area {
  &.DPP{
    &.low {fill: #a4e4b6; &:hover{fill:#84cb98;} &:active{fill: #77b789;}}
    &.mid {fill: #84cb98; &:hover{fill: #77b789;} &:active{fill: #6aa27a;}}
    &.high {fill: #639872;&:hover{fill: #4f7a5b;} &:active{fill: #3b5b44;}}
  }

  &.KMT{
    &.low {fill:#aab4eb; &:hover{fill:#8894D8;} &:active{fill:#7A85C2;}}
    &.mid {fill:#8894D8; &:hover{fill:#7A85C2;} &:active{fill:#6D76AD;}}
    &.high {fill:#666FA2; &:hover{fill:#525982;} &:active{fill:#3D4361;}}
  }
  &.PFP{
    &.low {fill:#fcf6f1; &:hover{fill:#FAF1EA;} &:active{fill:#F5E2D4;}}
    &.mid {fill:#DFA175; &:hover{fill:#C99169;} &:active{fill:#B2815E;}}
    &.high {fill:#A77958; &:hover{fill:#866146;} &:active{fill:#644835;}}
  }
}

.selected {
  stroke-width: 4;
  stroke: #262E49
}


</style>
