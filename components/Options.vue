<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const county_select = ref(null)
const district_select = ref(null)
const village_select = ref(null)

const selectCounty = (e) => {
  areaStore.selectCounty(e.target.value)
}

</script>
<template>
  <select name="" id="county_select" ref="county_select" @change="selectCounty" class="col-span-2 sm:col-span-1 lg:w-[156px] rounded-lg border border-[#E6E6E6] px-3 py-1" :value="areaStore.selectedCounty">
    <option value="" selected disabled>請選擇縣市</option>
    <option :value="item.id" v-for="item in areaStore.countiesList" :key="item">{{item.name}}</option>
  </select>
  <select name="" id="district_select" ref="district_select" @change="areaStore.selectDistrict" class="lg:w-[156px] rounded-lg border border-[#E6E6E6] px-3 py-1" :value="areaStore.selectedDistrict">
    <option value="" selected disabled>請選擇鄉鎮</option>
    <option :value="item.name" v-for="item in areaStore.districtsList" :key="item">{{item}}</option>

  </select>
  <select name="" id="village_select" ref="village_select" @change="areaStore.selectVillage" class="lg:w-[156px] rounded-lg border border-[#E6E6E6] px-3 py-1" :value="areaStore.selectedVillage">
    <option value="" selected disabled>請選擇村里</option>
    <option :value="item.name" v-for="item in areaStore.villagesList" :key="item">{{item}}</option>

  </select>
</template>