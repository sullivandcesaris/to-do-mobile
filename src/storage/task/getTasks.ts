import AsyncStorage from '@react-native-async-storage/async-storage'
import { TaskStorageDTO } from './tasksStorageDTO'
import { TASK_COLLECTION } from '../storageConfig'

export async function getTasks() {
  // eslint-disable-next-line no-useless-catch
  try {
    const storage = await AsyncStorage.getItem(`${TASK_COLLECTION}`)
    const task: TaskStorageDTO[] = storage ? JSON.parse(storage) : []

    return task
  } catch (error) {
    throw error
  }
}