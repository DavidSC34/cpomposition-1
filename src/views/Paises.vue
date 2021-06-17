<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais,index) in arrayData" :key="index">
     
      <router-link :to="`/paises/${pais.name}`">
       {{pais.name}}
       </router-link>
  </p>
</template>

<script>
import {onMounted, ref} from 'vue'
export default {
  setup(){
      const arrayData = ref([]);
          //Metodos
      onMounted(async()=>{
                try {
                    const res = await fetch('api.json');
                    arrayData.value = await res.json();
                } catch (error) {
                    console.log(error)
                }
      })


    //   const fetchData = async() =>{
    //       try {
    //           const res = await fetch('api.json');
    //           arrayData.value = await res.json();
    //       } catch (error) {
    //           console.log(error)
    //       }
    //   }
    //   fetchData();
      return {arrayData}
  }
}
</script>
