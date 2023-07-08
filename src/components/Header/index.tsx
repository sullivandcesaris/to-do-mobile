import { View, Image } from "react-native";

import logo from "../../assets/logo.png";
import { styles } from "./styles";



export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  )
}