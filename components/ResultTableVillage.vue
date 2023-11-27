<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()
const candidates = ref(areaStore.data?.['2020'].candidates)

</script>
<template>
  <div  class="px-5 py-3 border-2 rounded-lg w-auto  whitespace-nowrap mb-5" :style="{borderColor:areaStore.data_village[0].color.normal, backgroundColor:areaStore.data_village[0].color.light}">
    <h3 class="font-bold text-xl mb-3">{{ areaStore.selectedVillage }}</h3>
    <table style="width:100%">
      <tr class=""  v-for="item in areaStore.data_village" :key="item.no">
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
          <div class="font-bold">{{ (item.votes / areaStore.data['2020'].counties[areaStore.selectedCounty].districts[areaStore.selectedDistrict].villages[areaStore.selectedVillage].votes_total * 100).toFixed(1) }} %</div>
          <div class="text-[12px] mb-3">{{item.votes}} 票</div>
        </td>
      </tr>                
    </table>
  </div>
</template>