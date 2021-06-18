import { onMounted, ref } from 'vue';
//url--> es el valor que solamente cambia
export function useFetch(url) {
    const arrayData = ref([]);
    //Metodos
    onMounted(async() => {
        try {
            const res = await fetch(url);
            arrayData.value = await res.json();
        } catch (error) {
            console.log(error)
        }
    })



    return { arrayData }
}