<script setup>
import {ref,onMounted } from 'vue';

const imput = ref('');

const listTasks = ref([]);

onMounted(() => {
  if(localStorage.getItem('listTasks')){
    listTasks.value = JSON.parse(localStorage.getItem('listTasks'));
  }
});

const addTask = () => {
  if(!imput.value){
    alert('Ingrese una tarea');
    return;
  } else {
    listTasks.value.push({
    name: imput.value,
    date: new Date().toLocaleDateString()
  });
  localStorage.setItem('listTasks', JSON.stringify(listTasks.value));
  }
  imput.value = '';
  console.log(listTasks.value);
}

</script>
<template>
  <div>
    <label for="">Ingrese tarea</label>
    <input type="text" v-model="imput">

    <button @click="addTask">Agregar Tarea</button>




    <ul>
      <li v-for="(task,index) in listTasks" :key="index">
        {{task.name}} - {{task.date}}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
