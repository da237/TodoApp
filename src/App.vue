<script setup>
import { ref } from 'vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import Title from './components/Title.vue'

const taskFormRef = ref(null)

const openEdit = (index) => {
  taskFormRef.value.openToEdit(index)
}
</script>

<template>
  <header>
    <Title />
  </header>

  <TaskForm ref="taskFormRef" />
  <TaskList @edit="openEdit" />

</template>
