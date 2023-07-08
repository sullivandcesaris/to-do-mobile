import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerImage: {
    paddingTop: 48,

    alignItems: "center",
  },

  textBold: {
    paddingTop: 20,
    fontWeight: "bold",
    color: "#808080",
  },

  textGray: {
    color: "#808080",
  },

  containerTask: {
    backgroundColor: "#262626",
    padding: 12,
    marginBottom: 8,

    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },

  checkbox: {
    width: "75%",
  },

  containerIcon: {
    padding: 10,
  },
})