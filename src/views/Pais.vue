<template>
  <!-- <h1>DEtalle de pais: {{$route.params.nombre}}</h1> -->
  <h1>DEtalle de pais: {{nombre}}</h1>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
props:['nombre'],
  setup(props){
       //console.log(props.nombre);
       const nombreParams = useRoute();
       console.log(nombreParams.params.nombre);
  }
}
</script>
