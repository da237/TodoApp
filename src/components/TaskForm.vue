<script setup>
import { ref, watch } from 'vue'
import { useTasksStore } from '../stores/useTasksStore'

const store = useTasksStore()

// controla el modal
const show = ref(false)

// index de la tarea que se edita
const editingIndex = ref(null)

// campos del formulario
const title = ref('')
const description = ref('')

// abrir modal para agregar
const open = () => {
  resetFields()
  show.value = true
}

// abrir modal para editar
const openToEdit = (index) => {
  const task = store.listTasks[index]
  editingIndex.value = index
  title.value = task.name
  description.value = task.content
  show.value = true
}

const save = () => {
  if (!title.value.trim() || !description.value.trim()) {
    alert('Completa todos los campos')
    return
  }

  if (editingIndex.value !== null) {
    store.updateTask(editingIndex.value, title.value, description.value)
  } else {
    store.addTask(title.value, description.value)
  }

  show.value = false
  resetFields()
}

const resetFields = () => {
  title.value = ''
  description.value = ''
  editingIndex.value = null
}

watch(show, (value) => {
  if (!value) resetFields()
})

// se expone la función para que TaskList pueda abrir el modal
defineExpose({
  openToEdit
})
</script>


<template>
  <!-- Botón para abrir modal de agregar -->
  <v-btn color="primary" class="mb-4" @click="open">
    Crear tarea
  </v-btn>

  <!-- Modal -->
  <v-dialog v-model="show" max-width="600px">
    <v-card class="pa-4">
      <v-card-title>
        {{ editingIndex !== null ? 'Editar tarea' : 'Nueva tarea' }}
      </v-card-title>

      <v-card-text>
        <v-text-field label="Título" v-model="title" />
        <v-textarea label="Descripción" v-model="description" rows="3" />
      </v-card-text>

      <v-card-actions>
        <v-btn text @click="show = false">Cancelar</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="save">
          {{ editingIndex !== null ? 'Guardar cambios' : 'Agregar' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
