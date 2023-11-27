<template>
  <div class="grid grid-cols-2 lg:block gap-5">
    <div class=" lg:w-[260px] rounded-lg bg-[#DEE0E4] p-5 lg:mb-5">
      <h2 class="flex gap-2 items-center mb-2">
        <Icon name="material-symbols:info-outline" class="h-6 w-6" />
        <span class="text-xl font-semibold">小提示</span>
      </h2>
      <p>點擊選擇縣市、區、村里，可查看選舉結果</p>
      <div class=" h-[103px] flex justify-center items-center ">
        <div class="relative">
          <img src="@/assets/images/dropdown.png" alt="">
          <img src="@/assets/images/pointer.svg" alt="" class="absolute right-5 top-0">
        </div>
      </div>
    </div>
    <div class="lg:w-[260px] rounded-lg bg-[#DEE0E4] p-5 flex flex-col">
      <h2 class="flex gap-2 items-center mb-2">
        <Icon name="material-symbols:info-outline" class="h-6 w-6" />
        <span class="text-xl font-semibold">小提示</span>
      </h2>
      <p>點擊地圖查看縣市的選舉結果</p>
      <div class="h-[103px] flex justify-center items-center mt-auto">
        <div class="relative">
          <img src="@/assets/images/map.svg" alt="">
          <img src="@/assets/images/pointer.svg" alt="" class="absolute right-5 top-0">
        </div>
      </div>

    </div>
  </div>
</template>

<style>
*{
  outline:1px solid #A00
}
</style>