import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTasks } from './getTasks';
import { TASK_COLLECTION } from '../storageConfig';
import { TaskStorageDTO } from '../types'; // Certifique-se de importar corretamente o tipo TaskStorageDTO do arquivo adequado

export async function changeTaskStatus(id: number) {
  try {
    const storedTasks: TaskStorageDTO[] = await getTasks();

    const updatedTasks: TaskStorageDTO[] = storedTasks.map((task) => {
      if (task.id === id) {
        // Inverte o valor do status
        return { ...task, status: !task.status };
      }
      return task;
    });

    const tasks = JSON.stringify(updatedTasks);

    await AsyncStorage.setItem(TASK_COLLECTION, tasks);
  } catch (error) {
    throw error;
  }
}
