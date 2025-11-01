<script setup>
import { ref } from 'vue'
import { useTasksStore } from '../stores/useTasksStore'

const store = useTasksStore()
const title = ref('')
const description = ref('')

const add = () => {
  if (!title.value || !description.value) {
    alert('Por favor, completa todos los campos.')
    return
  }
  store.addTask(title.value, description.value)
  title.value = ''
  description.value = ''
}
</script>

<template>
  <v-card class="pa-5 mb-5" elevation="4">
    <v-card-title class="text-h6">Agregar nueva tarea</v-card-title>

    <v-card-text>
      <v-text-field
        label="Título"
        v-model="title"
        outlined
        dense
        class="mb-3"
      ></v-text-field>

      <v-textarea
        label="Descripción"
        v-model="description"
        outlined
        dense
        rows="3"
      ></v-textarea>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" @click="add" block>Agregar Tarea</v-btn>
    </v-card-actions>
  </v-card>
</template>
