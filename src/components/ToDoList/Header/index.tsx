import { Text, View } from "react-native";
import { styles } from "./styles";

interface HeaderProps {
  tasksCreated: number,
  tasksCompleted: number
}

export function Header({ tasksCreated, tasksCompleted }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerList}>
        <Text style={styles.headerTextBlue}>Criadas</Text>
        <View style={styles.backgroundNum}>
          <Text style={styles.num}>{tasksCreated}</Text>
        </View>
      </View>
      <View style={styles.headerList}>
        <Text style={styles.headerTextPurple}>Concluídas</Text>
        <View style={styles.backgroundNum}>
          <Text style={styles.num}>{tasksCompleted}</Text>
        </View>
      </View>
    </View>
  )
}