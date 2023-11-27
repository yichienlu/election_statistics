export const useAreaStore = defineStore('area', ()=>{

  const data = ref({})
  let countiesList = ref([])
  let districtsList = ref([])
  let villagesList = ref([])
  let selectedCounty = ref('')
  let selectedDistrict = ref('')
  let selectedVillage = ref('')
  const data_county = ref({})
  const data_district = ref({})
  const data_village = ref({})

  
  const party_color = {
    DPP:{normal:"#84CB98",light:"#edf7f0"},
    KMT:{normal:"#8894D8",light:"#dadef3"},
    PFP:{normal:"#DFA175",light:"#f5e2d4"},
  }

  const selectCounty = (e) => {
    villagesList.value = []
    selectedDistrict.value = ''
    selectedVillage.value = ''
    selectedCounty.value = data.value['2020'].counties[e.target.value].id
    data_district.value = {}
    data_village.value = {}

  
    districtsList.value = Object.values(data.value['2020'].counties[e.target.value].districts)

    let arr = JSON.parse(JSON.stringify(data.value['2020'].counties[selectedCounty.value].votes))
    arr.sort((a,b)=>b.votes-a.votes)
    data_county.value = arr

    data_county.value.map((item,index)=>{
      let party = data.value['2020'].candidates[item.no -1].party
      data_county.value[index].color = party_color[party]
    })

  }
  const selectDistrict = (e) => {
    selectedVillage.value = ''
    data_village.value = {}

    villagesList.value = Object.values(data.value['2020'].counties[selectedCounty.value].districts[e.target.value].villages)
    selectedDistrict.value = e.target.value
  
    let arr = JSON.parse(JSON.stringify(data.value['2020'].counties[selectedCounty.value].districts[selectedDistrict.value].votes))
    arr.sort((a,b)=>b.votes-a.votes)
    data_district.value = arr

    data_district.value.map((item,index)=>{
      let party = data.value['2020'].candidates[item.no -1].party
      data_district.value[index].color = party_color[party]
    })
  }
  
  const selectVillage = (e) => {
    selectedVillage.value = e.target.value
  
    let arr = JSON.parse(JSON.stringify(data.value['2020'].counties[selectedCounty.value].districts[selectedDistrict.value].villages[selectedVillage.value].votes))
    arr.sort((a,b)=>b.votes-a.votes)
    data_village.value = arr

    data_village.value.map((item,index)=>{
      let party = data.value['2020'].candidates[item.no -1].party
      data_village.value[index].color = party_color[party]
    })
  }

  return { data, countiesList, districtsList, villagesList, selectCounty, selectDistrict, selectVillage, selectedCounty, selectedDistrict, selectedVillage, data_county, data_district, data_village }
})