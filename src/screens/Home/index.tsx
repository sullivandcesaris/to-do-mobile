import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import { Header } from "../../components/Header";
import { AddToDo } from "../../components/AddToDo";
import { ToDoList } from "../../components/ToDoList";

import { getTasks } from "../../storage/task/getTasks";
import { addTask } from "../../storage/task/addTask";
import { removeTask } from "../../storage/task/removeTask";
import { changeTaskStatus } from "../../storage/task/changeTaskStatus";
import { TaskStorageDTO } from "../../storage/task/tasksStorageDTO";

import { styles } from './styles'

export function Home() {

  const [tasks, setTasks] = useState<TaskStorageDTO[]>([])
  const [newTask, setNewTask] = useState('')

  async function fetchTasks() {
    try {
      const tasksStorage = await getTasks();
      setTasks(tasksStorage)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Tarefas',
        'Não foi possível carregar as tarefas.',
      )
    }
  }

  async function handleAddTask() {
    if (!newTask) {
      Alert.alert('Nova tarefa', 'Por favor insira a descrição da tarefa')
      return
    }
    try {
      await addTask(newTask)
      setNewTask('')
      fetchTasks(); // Executa fetchTasks() após adicionar a tarefa
    } catch (error) {
      console.log(error)
      Alert.alert('Nova tarefa', 'Não foi possível adicionar.')
    }
  }

  async function deleteTask(id: number) {
    await removeTask(id);
    fetchTasks(); // Executa fetchTasks() após excluir a tarefa
  }

  async function handleStatus(id: number) {
    await changeTaskStatus(id);
    fetchTasks(); // Executa fetchTasks() após alterar o status da tarefa
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <Header />
      <View style={styles.container}>
        <AddToDo newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} />
        <ToDoList tasks={tasks} deleteTask={deleteTask} handleStatus={handleStatus} />
      </View>
    </>
  )
}
