import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import MealDetials from "./MealDetials";
import { useNavigation } from "@react-navigation/native";

const MealOverview = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const navigateToMealDetails = () => {
    navigation.navigate("MealDetailsScreen", { mealId: id });
  };

  return (
    <View style={styles.mealContainer}>
      <Pressable
        onPress={navigateToMealDetails}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => {
          backgroundColor: pressed ? "#ccc" : null;
        }}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.mealDetialsCOntainer}>
          <MealDetials
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealOverview;

const styles = StyleSheet.create({
  mealContainer: {
    margin: 16,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
  },
  mealDetialsCOntainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 8,
  },
});
