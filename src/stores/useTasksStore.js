import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const listTasks = ref(JSON.parse(localStorage.getItem('listTasks')) || [])

  const addTask = (name, content) => {
    if (!name || !content) 
      return
    listTasks.value.push({
      name,
      content,
      date: new Date().toLocaleDateString(),
    })
  }

  const removeTask = (index) => {
    listTasks.value.splice(index, 1)
  }

  const updateTask = (index,name,content) => {
    listTasks.value[index].name = name
    listTasks.value[index].content = content
  }

  

  watch(
    listTasks,
    (newList) => {
      localStorage.setItem('listTasks', JSON.stringify(newList))
    },
    { deep: true }
  )

  return { listTasks, addTask, removeTask, updateTask }
})
