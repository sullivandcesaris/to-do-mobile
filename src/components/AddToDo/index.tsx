import { useState } from "react";
import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from "./styles";
import { addTask } from "../../storage/task/addTask";

interface NewTask {
  newTask: string,
  setNewTask: (task: string) => void
  handleAddTask: () => void
}

export function AddToDo({ newTask, setNewTask, handleAddTask }: NewTask){

  return (
    <View style={styles.containerInput} >
      <TextInput 
        style={styles.input} 
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChangeText={setNewTask}
        placeholderTextColor="#808080" 
        onSubmitEditing={handleAddTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask} >
        <MaterialIcons name="add-circle-outline" color="#FFF" size={18} ></MaterialIcons>
      </TouchableOpacity>
    </View>
  )
}