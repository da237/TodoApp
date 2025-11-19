<script setup>
import { useTasksStore } from '../stores/useTasksStore'
const store = useTasksStore()

const remove = (index) => {
  if (confirm('¿Eliminar esta tarea?')) {
    store.removeTask(index)
  }
}

const emit = defineEmits(['edit'])

const edit = (index) => {
  emit('edit', index)
}


</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(task, index) in store.listTasks" :key="index" cols="12" sm="6" md="4">
        <v-card class="pa-3" elevation="3">
          <v-card-title class="text-h6">
            {{ task.name }}
          </v-card-title>

          <v-card-text>
            {{ task.content }}
            <div class="text-caption mt-2 text-grey">
              Fecha: {{ task.date }}
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="error" variant="tonal" @click="remove(index)">
              Eliminar
            </v-btn>
            <v-btn icon color="primary" variant="tonal" @click="edit(index)">
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>

          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-container {
  padding-top: 0 !important;
}

h2 {
  text-align: center;
  margin: 0;
  padding-bottom: 16px;
}
</style>
