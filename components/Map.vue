<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()


const party = ref('DPP')
const percentage  = ref(60)

const selectCounty = (county) => {
  areaStore.selectedCounty = county
  areaStore.districtsList = Object.values(areaStore.data['2020'].counties[county].districts)
}

// const color_palette = ref({
//   DPP: {
//     low: ['#f3faf5','#edf7f0','#d9efdf'],
//     mid: ['#84cb98','#77b789','#6aa27a'],
//     high:['#639872','#4f7a5b','#3b5b44'],
//     darker:'#2e4735'
//   },
//   KMT: {
//     low: ['#f3f4fb','#edeff9','#dadef3'],
//     mid: ['#8894D8','#7A85C2','#6D76AD'],
//     high:['#666FA2','#525982','#3D4361'],
//     darker:'#30344C '
//   },
//   PFP: {
//     low: ['#fcf6f1','#FAF1EA','#F5E2D4'],
//     mid: ['#DFA175','#C99169','#B2815E'],
//     high:['#A77958','#866146','#644835'],
//     darker:'#4E3829'
//   }
// }) 

onMounted(()=>{
//   const map_data = JSON.parse(JSON.stringify(Object.values(areaStore.data['2020'].counties)))
//   map_data.map((item,index)=>{
//     // console.log(item.county_total)
//     item.county_total.shift()
//     item.county_total.sort((a,b)=>b.votes-a.votes)
//     console.log(item.county_total)
//     let total = 0
//     map_data[index].total=item.county_total.forEach((item)=>total+=item.votes)

//   })
// console.log(map_data)

})




</script>
<template>
  <div class="container mx-auto px-6">
    <!-- {{ Object.values(areaStore.data['2020'].counties) }} -->
    <svg viewBox="0 0 510 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path v-for="item in Object.values(areaStore.data['2020'].counties)" 
      :key="item" class="area" :id="item.id" @click="selectCounty(item.id)"
      :class="{'DPP':party=='DPP', 'KMT':party=='KMT','PFP':party=='PFP', 'high':percentage>60, 'mid':percentage>30 || percentage <60, 'low':percentage<30 }" :d="item.map_d" />
      
      <!-- <path class="area" id="hualian"
       d="" />
      <path class="area" id="taitung" d="" />
      <path class="area" id="new_taipei" d="" />
      <path @click="selectCounty('taipei')" class="area DPP high" id="taipei" d="" />
      <path class="area" id="taoyuan" d="" />
      <path class="area" id="hsinchu_county" d="" />
      <path class="area" id="hsinchu_city" d="" />
      <path class="area" id="matsu" d="" />
      <path class="area" id="kinmen" d="" />
      <path class="area" id="penghu" d="" />
      <path class="area" id="miaoli" d="" />
      <path class="area" id="nantou" d="" />
      <path class="area" id="taichung" d="" />
      <path class="area" id="pingtung" d="" />
      <path class="area" id="yunling" d="" />
      <path class="area" id="chiayi_county" d="" />
      <path class="area" id="tainan" d="" />
      <path class="area" id="kaohsiung" d="" />
      <path class="area" id="chiayi_city" d="" />
      <path class="area" id="changhua" d="" />
      <path class="area" id="keelung" d="" /> -->
    </svg>
  </div>
</template>

<style lang="scss" scoped>
path {
  fill:#639872;
  cursor: pointer;
}

.area {
  &.DPP{
    &.low {fill: #f3faf5; &:hover{fill:#edf7f0;} &:active{fill: #d9efdf;}}
    &.mid {fill: #84cb98; &:hover{fill: #77b789;} &:active{fill: #6aa27a;}}
    &.high {fill: #639872;&:hover{fill: #4f7a5b;} &:active{fill: #3b5b44;}}
  }

  &.KMT{
    &.low {fill:#f3f4fb; &:hover{fill:#edeff9;} &:active{fill:#dadef3;}}
    &.mid {fill:#8894D8; &:hover{fill:#7A85C2;} &:active{fill:#6D76AD;}}
    &.high {fill:#666FA2; &:hover{fill:#525982;} &:active{fill:#3D4361;}}
  }
  &.PFP{
    &.low {fill:#fcf6f1; &:hover{fill:#FAF1EA;} &:active{fill:#F5E2D4;}}
    &.mid {fill:#DFA175; &:hover{fill:#C99169;} &:active{fill:#B2815E;}}
    &.high {fill:#A77958; &:hover{fill:#866146;} &:active{fill:#644835;}}
  }
}



</style>
