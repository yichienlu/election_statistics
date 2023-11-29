<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

onMounted(()=>{
  areaStore.selectNational()
})

</script>
<template>
  <div>
    <table style="width:100%">
      <tr class=""  v-for="item in areaStore.data_national" :key="item.no">
        <td class="align-top py-1">
          <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] text-white" :style="{backgroundColor:item.candidate.party_color.normal}">{{item.candidate.no}}</div>
        </td>
        <td class="py-1">
          <div class="px-3 mb-3 border-r-2" :style="{borderColor:item.candidate.party_color.normal}">
            <div class="font-bold">{{ item.candidate.party_full }}</div>
            <div class="text-[12px]">{{ item.candidate.president }} | {{ item.candidate.vicePresident }}</div>
          </div>
        </td>
        <td class="pl-5 mb-3">
          <div class="font-bold">{{ (item.votes / areaStore.data.votes_valid * 100).toFixed(1) }} %</div>
          <div class="text-[12px] mb-3">{{item.votes.toLocaleString("en-US")}} 票</div>
        </td>
      </tr>                
    </table>
  </div>
</template>