import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTasks } from './getTasks';
import { TASK_COLLECTION } from '../storageConfig';

export async function removeTask(id: number) {
  try {
    const storage = await getTasks();

    const filtered = storage.filter((task) => task.id !== id);

    const tasks = JSON.stringify(filtered);

    await AsyncStorage.setItem(TASK_COLLECTION, tasks);
  } catch (error) {
    throw error;
  }
}
