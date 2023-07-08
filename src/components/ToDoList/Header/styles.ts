import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#262626",
  },

  headerList: {
    flexDirection: "row",
    gap: 8,
  },

  headerTextBlue: {
    color: "#4EA8DE",
    fontSize: 18,
    fontWeight: "bold",
  },

  headerTextPurple: {
    color: "#8284FA",
    fontSize: 18,
    fontWeight: "bold",
  },

  backgroundNum: {
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    borderRadius: 8,

    justifyContent: "center",
    alignItems: "center",
  },

  num: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  }
})