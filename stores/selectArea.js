export const useAreaStore = defineStore('area', ()=>{

  const data = ref({})
  let countiesList = ref([])
  let districtsList = ref([])
  let villagesList = ref([])
  let selectedCounty = ref('')
  let selectedDistrict = ref('')
  let selectedVillage = ref('')

  const selectCounty = (e) => {
    villagesList.value = []
    selectedVillage.value = ''
    selectedCounty.value = data.value['2020'].counties[e.target.value].id
  
    districtsList.value = Object.values(data.value['2020'].counties[e.target.value].districts)
  }
  const selectDistrict = (e) => {
    villagesList.value = Object.values(data.value['2020'].counties[selectedCounty.value].districts[e.target.value].villages)
    selectedDistrict.value = e.target.value
  
  }
  const selectVillage = (e) => {
    console.log(e.target.value)
    selectedVillage.value = e.target.value
  
  }

  return { data, countiesList, districtsList, villagesList, selectCounty, selectDistrict, selectVillage, selectedCounty, selectedDistrict, selectedVillage }
})