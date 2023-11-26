<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

const data_national = ref({})
const candidates = ref(areaStore.data?.['2020'].candidates)

let arr = areaStore.data['2020'].national_total
arr?.shift()
let total=0
arr.forEach((item)=>{total += item.votes})
data_national.value = {list:arr.sort((a,b)=>b.votes-a.votes), total}

</script>
<template>
  <div>
    <table style="width:100%">
      <tr class=""  v-for="item in data_national.list" :key="item.no">
        <td class="align-top py-1">
          <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] bg-[#84CB98] text-white">{{item.no}}</div>
        </td>
        <td class="py-1">
          <div class="px-3 mb-3 border-r-2 border-[#84CB98]">
            <div class="font-bold">{{ candidates[item.no-1].party }}</div>
            <div class="text-[12px]">{{ candidates[item.no-1].president }} | {{ candidates[item.no-1].vicePresident }}</div>
          </div>
        </td>
        <td class="pl-5 mb-3">
          <div class="font-bold">{{ (item.votes / data_national.total * 100).toFixed(1) }} %</div>
          <div class="text-[12px] mb-3">{{item.votes}} 票</div>
        </td>
      </tr>                
    </table>
  </div>
</template>