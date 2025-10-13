<script setup>
import {ref,onMounted } from 'vue';

const imput = ref('');

const listTasks = ref([]);

const addTask = () => {
  listTasks.value.push({
    name: imput.value,
    date: new Date().toLocaleDateString()
  });
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
