<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const map_arr = ref({})

onMounted(()=>{
  map_arr.value = JSON.parse(JSON.stringify(Object.keys(areaStore.data.counties)))

  map_arr.value.map((area, i)=>{
    const {districts, ...obj} = areaStore.data.counties[area]
    map_arr.value[i] = JSON.parse(JSON.stringify(obj))
    map_arr.value[i].votes.map((item, j)=>{
      let object = {
        candidate:areaStore.data.candidates[j],
        vote: item,
        percentage: item/map_arr.value[i].votes_total
      }
      map_arr.value[i].votes[j] = object
    })
    map_arr.value[i].votes.sort((a,b)=>b.vote-a.vote)
    map_arr.value[i].map_d = areaStore.data.map[area]
  })
})



const selectCounty = (county) => {
  // console.log( areaStore.selectedCounty, county)
  areaStore.villagesList = []
  areaStore.selectedDistrict = ''
  areaStore.selectedVillage = ''
  areaStore.selectedCounty = county

  areaStore.data_district = {}
  areaStore.data_village = {}
  areaStore.districtsList = Object.keys(areaStore.data.counties[county].districts)



  let arr = JSON.parse(JSON.stringify(areaStore.data.counties[county].votes))
  arr.map((item,index)=>{
    let obj = {
      candidate:areaStore.data.candidates[index],
      votes:item,
    }
    arr[index] = obj
  })
  arr.sort((a,b)=>b.votes-a.votes)
  areaStore.data_county.value = arr



  console.log(arr)


  // arr.sort((a,b)=>b.votes-a.votes)
  // areaStore.data_county = arr
  // areaStore.data_county.map((item,index)=>{
  //   let party = areaStore.data.candidates[item.no -1].party
  //   areaStore.data_county[index].color = party_color[party]
  // })

}





</script>
<template>
  <div class="container mx-auto px-6">
    <svg viewBox="0 0 510 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path v-for="item in map_arr" @click="selectCounty(item.id)"
      :key="item" class="area" :id="item.id"
      :class="{
        'DPP':item.votes[0].candidate.party=='DPP', 
        'KMT':item.votes[0].candidate.party=='KMT',
        'PFP':item.votes[0].candidate.party=='PFP', 

        'high':item.votes[0].percentage>0.62, 
        'mid':item.votes[0].percentage>0.55 && item.votes[0].percentage <0.62, 
        'low':item.votes[0].percentage<0.55 ,

        'selected':item.id==areaStore.selectedCounty
      }" 
      :d="item.map_d" />
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
