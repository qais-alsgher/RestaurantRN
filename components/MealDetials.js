import { View, Text, StyleSheet } from "react-native";

const MealDetials = ({ duration, complexity, affordability, styleT }) => {
  return (
    <View style={styles.mealDetialsCOntainer}>
      <View style={styles.mealDetials}>
        <Text style={[styles.textStyle, styleT]}>{duration}m</Text>
        <Text style={[styles.textStyle, styleT]}>{complexity}</Text>
        <Text style={[styles.textStyle, styleT]}>{affordability}</Text>
      </View>
    </View>
  );
};

export default MealDetials;

const styles = StyleSheet.create({
  mealDetialsCOntainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mealDetials: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    padding: 8,
    width: "80%",
  },
  textStyle: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "bold",
  },
});
