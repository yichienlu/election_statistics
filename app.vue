<script setup>
// https://www.figma.com/file/Caoi6yMxwbeKMneS5tsCt6/2020%E7%B8%BD%E7%B5%B1%E9%81%B8%E8%88%89%E5%8D%B3%E6%99%82%E9%96%8B%E7%A5%A8%E5%9C%B0%E5%9C%96?node-id=66%3A3067&mode=dev

// Todo：
// - 圓餅圖
// - 資料串接
// - 地圖連結
// - 下拉選單
// - 


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
    <div class="container mx-auto px-6 flex mb-5 sm:mb-10">
      <div class="grow grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2">
        <select name="" id="" class="col-span-2 sm:col-span-1 rounded-lg border border-[#E6E6E6] px-3 py-1">
          <option value="">請選擇縣市</option>
        </select>
        <select name="" id="" class="rounded-lg border border-[#E6E6E6] px-3 py-1">
          <option value="">請選擇鄉鎮</option>
        </select>
        <select name="" id="" class="rounded-lg border border-[#E6E6E6] px-3 py-1">
          <option value="">請選擇村里</option>
        </select>
      </div>
      <button class="block w-9 sm:w-auto h-[76px] sm:h-9 rounded-lg text-2xl sm:text-base bg-primary hover:bg-primaryHover active:bg-primaryActive text-white py-1 sm:px-3 ml-2">
        <span class="hidden sm:inline">清除</span>
        <Icon name="tabler:reload" />
      </button>
    </div>

    <div class=" lg:container mx-auto pb-10 lg:flex ">
        <!-- 投票概況 -->
      <div class="container lg:w-auto mx-auto lg:mx-0 px-6 grow-0">
        <div class="bg-white px-5 py-3 rounded-xl lg:inline-block">
          <button @click="toggleResult" class="w-full flex justify-between items-center text-lg lg:text-xl font-bold lg:cursor-default">
            <span>投票概況</span>
            <span class="lg:hidden duration-200 text-xl" :class="{'rotate-90':openResult}">
              <Icon name="mingcute:right-line" />
            </span>
          </button>
          <div class="duration-200 overflow-hidden" :class="{'h-0 lg:h-auto':!openResult}">
            <div  class="block sm:flex lg:block items-center mt-5"> 
              <div class="flex items-center">
                <div class="mr-3">
                  <ClientOnly>
                    <voteRateDonut />
                    <!-- <Echart /> -->
                  </ClientOnly>
                </div>
                <div class="text-center mr-3">
                  <div class="font-bold">74.9%</div>
                  <div class="text-[12px]">投票率</div>
                </div>
              </div>
              <ul>
                <li class="mb-2">投票數
                  <span class="font-bold ms-2">14,464,571 票</span>
                </li>
                <li class="mb-2">無效票數
                  <span class="font-bold ms-2">163,631 票</span>
                </li>
                <li>有效票數
                  <span class="font-bold ms-2">14,300,940 票</span>
                </li>
              </ul>
            </div>
            <div  class="block sm:flex lg:block items-center mt-5">
              <ClientOnly>
                <!-- <voteShareChart /> -->
                <voteShareDonut />
              </ClientOnly>
              <ResultTable class="ms-3 lg:ms-0 whitespace-nowrap" />
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
      <!-- freemode 沒有作用??? -->

        <SwiperSlide class="bg-blue-400" >
          <div class="px-5 py-3 border-2 border-[#84CB98] bg-[#EDF7F0] rounded-lg  whitespace-nowrap">
            <h3 class="font-bold text-xl mb-3">ＸＸ市</h3>
            <ResultTable />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="px-5 py-3 border-2 border-[#84CB98] bg-[#EDF7F0] rounded-lg w-auto  whitespace-nowrap">
            <h3 class="font-bold text-xl mb-3">ＸＸ區</h3>
            <ResultTable />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="px-5 py-3 border-2 border-[#84CB98] bg-[#EDF7F0] rounded-lg w-auto  whitespace-nowrap">
            <h3 class="font-bold text-xl mb-3">ＸＸ里</h3>
            <ResultTable />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
      <div class="hidden container mx-auto lg:mx-0 lg:w-auto px-6 ms-5 lg:block">
        <div class="px-5 py-3 border-2 border-purple-400 bg-purple-50 rounded-lg w-auto  whitespace-nowrap mb-5">
            <h3 class="font-bold text-xl mb-3">ＸＸ市</h3>
            <ResultTable />
          </div>
          <div class="px-5 py-3 border-2 border-orange-500 bg-orange-50 rounded-lg mb-5">
            <h3 class="font-bold text-xl mb-3">ＸＸ區</h3>
            <ResultTable />
          </div>
          <div class="px-5 py-3 border-2 border-[#84CB98] bg-[#EDF7F0] rounded-lg">
            <h3 class="font-bold text-xl mb-3">ＸＸ里</h3>
            <ResultTable />
          </div>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  outline: 1px solid #a00;
}

</style>
