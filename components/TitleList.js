import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TitleList = ({ children }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{children.toUpperCase()}</Text>
    </View>
  );
};

export default TitleList;

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#f7d39e",
    borderBottomWidth: 2,
    marginHorizontal: "15%",
    marginVertical: 8,
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#f7d39e",
    margin: 8,
  },
});
