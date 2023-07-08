import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTasks } from './getTasks';
import { TASK_COLLECTION } from '../storageConfig';

export async function addTask(description: string) {
  try {
    const storedTasks = await getTasks();

    let biggerID = 0;

    storedTasks.forEach((task) => {
      if (task.id >= biggerID) {
        biggerID = task.id;
      }
    });

    const newTask = {
      id: biggerID + 1,
      description,
      status: false,
    };

    const updatedTasks = [...storedTasks, newTask];

    const storage = JSON.stringify(updatedTasks);

    await AsyncStorage.setItem(`${TASK_COLLECTION}`, storage);
  } catch (error) {
    throw error;
  }
}
