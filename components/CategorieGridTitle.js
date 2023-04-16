import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const CategorieGridTitle = ({ title, color, onSelect }) => {
  return (
    <View
      style={[
        styles.gridContainer,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Pressable
        onPress={onSelect}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#ccc" : color,
          },
          styles.screen,
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CategorieGridTitle;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
});
