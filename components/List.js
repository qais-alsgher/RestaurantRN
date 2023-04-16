import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return (
    <View style={styles.listContainer}>
      {data.map((item) => {
        return (
          <View key={item} style={styles.lisTextContainer}>
            <Text style={styles.textList}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
  lisTextContainer: {
    backgroundColor: "#1C0A00",
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  textList: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});
