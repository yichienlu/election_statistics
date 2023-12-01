export const useAreaStore = defineStore('area', ()=>{

  const data = ref({})
  let countiesList = ref([])
  let districtsList = ref([])
  let villagesList = ref([])
  let selectedCounty = ref('')
  let selectedDistrict = ref('')
  let selectedVillage = ref('')
  const data_national = ref({})
  const data_county = ref({})
  const data_district = ref({})
  const data_village = ref({})

  const candidates = ref(data.value.candidates)

  const selectNational = () => {
    let arr = JSON.parse(JSON.stringify(data.value.votes))
    arr.map((item,index)=>{
      let obj = {
        candidate:data.value.candidates[index],
        votes:item,
      }
      arr[index] = obj
    })
    
    arr.sort((a,b)=>b.votes-a.votes)
    data_national.value = arr
  }

  const selectCounty = (county) => {
    villagesList.value = []
    selectedDistrict.value = ''
    selectedVillage.value = ''
    selectedCounty.value = county
    data_district.value = {}
    data_village.value = {}
  
    districtsList.value = Object.keys(data.value.counties[county].districts)

    let arr = JSON.parse(JSON.stringify(data.value.counties[selectedCounty.value].votes))
    arr.map((item,index)=>{
      let obj = {
        candidate:data.value.candidates[index],
        votes:item,
      }
      arr[index] = obj
    })
    arr.sort((a,b)=>b.votes-a.votes)
    data_county.value = arr



  }
  const selectDistrict = (e) => {
    selectedVillage.value = ''
    data_village.value = {}

    villagesList.value = Object.keys(data.value.counties[selectedCounty.value].districts[e.target.value].villages)
    selectedDistrict.value = e.target.value

    let arr = JSON.parse(JSON.stringify(data.value.counties[selectedCounty.value].districts[selectedDistrict.value].votes))
    arr.map((item,index)=>{
      let obj = {
        candidate:data.value.candidates[index],
        votes:item,
      }
      arr[index] = obj
    })
    arr.sort((a,b)=>b.votes-a.votes)
    data_district.value = arr
  }
  
  const selectVillage = (e) => {
    selectedVillage.value = e.target.value
  
    let arr = JSON.parse(JSON.stringify(data.value.counties[selectedCounty.value].districts[selectedDistrict.value].villages[selectedVillage.value]))

    arr.map((item,index)=>{
      let obj = {
        candidate:data.value.candidates[index],
        votes:item,
      }
      arr[index] = obj
    })
    arr.sort((a,b)=>b.votes-a.votes)
    data_village.value = arr
  }

  return { data, countiesList, districtsList, villagesList, selectNational, selectCounty, selectDistrict, selectVillage, selectedCounty, selectedDistrict, selectedVillage, data_national, data_county, data_district, data_village }
})