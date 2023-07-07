import { Text, View } from "react-native";
import { styles } from './styles'
import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Hello world!</Text>
      </View>
    </>
  )
}