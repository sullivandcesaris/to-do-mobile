import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "./Header";
import clipboard from "../../assets/clipboard.png";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialIcons } from '@expo/vector-icons'

type TaskProps = {
  id: number;
  description: string;
  status: boolean;
};

type Tasks = TaskProps[];

type ToDoListProps = {
  tasks: Tasks;
  deleteTask: (id: number) => void;
  handleStatus: (id: number) => void;	
};

export function ToDoList({ tasks, deleteTask, handleStatus }: ToDoListProps) {
  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.status === true).length;

  return (
    <>
      <Header tasksCreated={tasksCreated} tasksCompleted={tasksCompleted} />
      {tasks.length === 0 ? (
        <View style={styles.containerImage}>
          <Image source={clipboard} />
          <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.textGray}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerTask}>
              <BouncyCheckbox
                size={25}
                fillColor="#8284FA"
                unfillColor="transparent"
                text={item.description}
                isChecked={item.status}
                textStyle={ item.status ? { color: "#808080" } : { color: "#FFF" }}
                style={styles.checkbox}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked: boolean) => handleStatus(item.id)}
              />
              <TouchableOpacity style={styles.containerIcon} onPress={() => deleteTask(item.id)}>
                <MaterialIcons name="delete-outline" color="#808080" size={22}/>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </>
  );
}
