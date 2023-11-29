<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const votes_total = ref(0)

onMounted(()=>{
  let votes = areaStore.data.counties[areaStore.selectedCounty].districts[areaStore.selectedDistrict].votes
  votes_total.value = votes.reduce((a,c)=>a+c,0)
})
</script>

<template>
  <div  class="lg:w-[260px] px-5 py-3 border-2 rounded-lg whitespace-nowrap mb-5" :style="{backgroundColor:areaStore.data_district[0].candidate.party_color.light, borderColor:areaStore.data_district[0].candidate.party_color.normal}">
    <h3 class="font-bold text-xl mb-3">{{ areaStore.selectedDistrict }}</h3>
    <table style="width:100%">
      <tr class=""  v-for="item in areaStore.data_district" :key="item.no">
        <td class="align-top py-1">
          <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] text-white" :style="{backgroundColor:item.candidate.party_color.normal}">{{item.candidate.no}}</div>
        </td>
        <td class="py-1">
          <div class="px-3 mb-3 border-r-2 " :style="{borderColor:item.candidate.party_color.normal}">
            <div class="font-bold">{{ item.candidate.party_full }}</div>
            <div class="text-[12px]">{{item.candidate.president }} | {{ item.candidate.vicePresident }}</div>
          </div>
        </td>
        <td class="pl-5 mb-3">
          <div class="font-bold">{{ (item.votes/ votes_total * 100).toFixed(1) }} %</div>
          <div class="text-[12px] mb-3">{{item.votes.toLocaleString("en-US") }} 票</div>
        </td>
      </tr>                
    </table>
  </div>


  <!-- <div  class="px-5 py-3 border-2 rounded-lg w-auto  whitespace-nowrap mb-5" :style="{borderColor:areaStore.data_district[0].color.normal, backgroundColor:areaStore.data_district[0].color.light}">
    <h3 class="font-bold text-xl mb-3">{{ areaStore.selectedDistrict }}</h3>
    <table style="width:100%">
      <tr class=""  v-for="item in areaStore.data_district" :key="item.no">
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
          <div class="font-bold">{{ (item.votes / areaStore.data.counties[areaStore.selectedCounty].districts[areaStore.selectedDistrict].votes_total * 100).toFixed(1) }} %</div>
          <div class="text-[12px] mb-3">{{item.votes.toLocaleString("en-US")}} 票</div>
        </td>
      </tr>                
    </table>
  </div> -->
</template>