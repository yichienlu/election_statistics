<script setup>
import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

</script>
<template>
  <div>
    <table style="width:100%">
      <tr class="">
          <td class="align-top py-1">
            <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] bg-[#84CB98] text-white">3</div>
          </td>
          <td class="py-1">
            <div class="px-3 mb-3 border-r-2 border-[#84CB98]">
              <div class="font-bold">民主進步黨</div>
              <div class="text-[12px]">蔡英文 | 賴清德</div>
            </div>
          </td>
          <td class="pl-5 mb-3">
            <div class="font-bold">57.13 %</div>
            <div class="text-[12px] mb-3">8,170,231 票</div>
          </td>
        </tr>                
        <tr class="py-1">
          <td class="align-top py-1">
            <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] bg-blue-400 text-white">2</div>
          </td>
          <td class="py-1">
            <div class="px-3 mb-3 border-r-2 border-[#84CB98]">
              <div class="font-bold">中國國民快倒黨</div>
              <div class="text-[12px]">韓國瑜｜張善政</div>
            </div>
          </td>
          <td class="pl-5">
            <div class="font-bold">42.0 %</div>
            <div class="text-[12px] mb-3">685,830 票</div>
          </td>
        </tr>
        <tr>
          <td class="align-top py-1">
            <div class="w-6 h-6 flex items-center justify-center rounded-full text-[12px] bg-orange-500 text-white">1</div>
          </td>
          <td class="py-1">
            <div class="px-3 border-r-2 border-[#84CB98]">
              <div class="font-bold">親民黨</div>
              <div class="text-[12px]">宋楚瑜｜余湘</div>
            </div>
          </td>
          <td class="pl-5">
            <div class="font-bold">4.3 %</div>
            <div class="text-[12px]">70,769票</div>
          </td>
        </tr>  
    </table>
  </div>
</template>