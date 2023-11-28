<script setup>
// https://www.figma.com/file/Caoi6yMxwbeKMneS5tsCt6/2020%E7%B8%BD%E7%B5%B1%E9%81%B8%E8%88%89%E5%8D%B3%E6%99%82%E9%96%8B%E7%A5%A8%E5%9C%B0%E5%9C%96?node-id=66%3A3067&mode=dev

// Todo：
// - 圓餅圖 data
// - 選單樣式
// - 地圖顏色
// - result color
// - map select options

import { useAreaStore } from '@/stores/selectArea'
const areaStore = useAreaStore()

import data from '@/db.json/'
areaStore.data = data
// console.log(data)
  areaStore.countiesList = ref(Object.values(data['2020'].counties))

  const openResult = ref(false)
  const toggleResult = () => {
    openResult.value = !openResult.value
  }

  const swiperOptions = ref({
    breakpoints: {       
      320: {slidesPerView: 1},
      400: {slidesPerView: 1.2},   
      480: {slidesPerView: 1.5},
      600: {slidesPerView: 1.8}, 
      640: {slidesPerView: 1.9}, 
      700: {slidesPerView: 2.1},
      768: {slidesPerView: 2.5},
      840: {slidesPerView: 2.7},
      920: {slidesPerView: 3.1}
    }   
  })

  const clearSelection = () => {
    console.log("click!")
    areaStore.selectedCounty = ''
    areaStore.selectedDistrict = ''
    areaStore.selectedVillage = ''
  }
</script>
<template>
  <div class="bg-[#F5F5F5] min-h-[100vh]">
    <h1 class="bg-primary text-white">
      <div class="container mx-auto px-6 pt-7 pb-4 sm:pt-4 text-xl sm:text-3xl font-bold">2020 開票地圖</div>
    </h1>

    <div class="container mx-auto px-6 flex gap-5 pt-5 sm:pt-8 mb-5 font-bold sm:text-xl overflow-hidden">
      <button class=" py-3 border-b-4 border-primary whitespace-nowrap">第15任 總統副總統大選</button>
      <button class=" py-3 text-[#BFBFBF] whitespace-nowrap">第10任 立法委員選舉</button>
    </div> 
    <div class="sticky top-6 lg:relative container mx-auto px-6 flex mb-5 sm:mb-10 z-20">
      <div class="grow grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2">
        <Options />
      </div>
      <button class="block w-9 sm:w-auto h-[76px] sm:h-9 rounded-lg text-2xl sm:text-base bg-primary hover:bg-primaryHover active:bg-primaryActive text-white py-1 sm:px-3 ml-2" @click="clearSelection">
        <span class="hidden sm:inline">清除</span>
        <Icon name="tabler:reload" />
      </button>
    </div>

    <div class="lg:container mx-auto pb-10 lg:flex ">
        <!-- 投票概況 -->
      <div class="container lg:w-auto mx-auto lg:mx-0 sm:px-6 grow-0">
        <div class="bg-white px-5 py-3 sm:rounded-xl lg:inline-block">
          <button @click="toggleResult" class="w-full flex justify-between items-center text-lg lg:text-xl font-bold lg:cursor-default">
            <span>投票概況</span>
            <span class="lg:hidden duration-200 text-xl" :class="{'rotate-90':openResult}">
              <Icon name="mingcute:right-line" />
            </span>
          </button>
          <div class="duration-200 overflow-hidden" :class="{'h-0 lg:h-auto':!openResult}">
            <div  class="block sm:flex lg:block items-center mt-5 mb-10"> 
              <div class="flex items-center">
                <div class="mr-3 lg:mb-5">
                  <ClientOnly>
                    <voteRateDonut />
                  </ClientOnly>
                </div>
                <div class="text-center mr-3">
                  <div class="font-bold">{{areaStore.data['2020'].vote_rate.toFixed(2)}}%</div>
                  <div class="text-[12px]">投票率</div>
                </div>
              </div>
              <ul>
                <li class="mb-2">投票數
                  <span class="font-bold ms-2">{{ areaStore.data['2020'].votes_valid }} 票</span>
                </li>
                <li class="mb-2">無效票數
                  <span class="font-bold ms-2">{{ areaStore.data['2020'].votes_invalid }} 票</span>
                </li>
                <li>有效票數
                  <span class="font-bold ms-2">{{ areaStore.data['2020'].votes_total }} 票</span>
                </li>
              </ul>
            </div>
            <div  class="sm:flex lg:block items-center mt-5">
              <ClientOnly>
                <!-- <voteShareChart /> -->
                <voteShareDonut class="lg:mb-5" />
              </ClientOnly>
              <ResultTableNational class="ms-3 lg:ms-0 whitespace-nowrap" />
            </div>
          </div>
        </div>
      </div>

      <Map class="mt-5 lg:mt-0 mb-5 container mx-auto lg:max-w-[500px]" />
        
      <div class="lg:hidden">

        <Swiper
          :spaceBetween = 20
          :slidesOffsetBefore = 24
          :slidesOffsetAfter = 24
          :free-mode=true 
          :slidesPerView = "0.8"
          :breakpoints = swiperOptions.breakpoints
        >
          <SwiperSlide v-if="areaStore.selectedCounty"  >
            <ResultTableCounty />
          </SwiperSlide>
          <SwiperSlide  v-if="areaStore.selectedDistrict">
            <ResultTableDistrict />
          </SwiperSlide>
          <SwiperSlide v-if="areaStore.selectedVillage">
            <ResultTableVillage />
          </SwiperSlide>
        </Swiper>
      </div>
      <Tips v-if="areaStore.selectedCounty == ''&& areaStore.selectedDistrict =='' && areaStore.selectedVillage == ''" class="container mx-auto lg:mx-0 px-6 lg:w-auto" />
      <div v-else class="hidden mx-auto lg:mx-0 lg:w-auto px-6 ms-5 lg:block">
        <ResultTableCounty v-if="areaStore.selectedCounty" />
        <ResultTableDistrict  v-if="areaStore.selectedDistrict" />
        <ResultTableVillage v-if="areaStore.selectedVillage" />

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  outline: 1px solid #a00;
}

</style>
