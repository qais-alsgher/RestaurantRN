import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../assets/data/dummy-data";
import MealDetials from "../components/MealDetials";
import { useLayoutEffect } from "react";
import TitleList from "../components/TitleList";
import List from "../components/List";
import FavoriteButton from "../components/FavoriteButton";

const MealDetialsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => <FavoriteButton mealId={mealId} />,
    });
  }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetials
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        styleT={{ color: "#f7d39e" }}
      />
      <TitleList>Ingredient</TitleList>
      <List data={selectedMeal.ingredients} />
      <TitleList>Steps</TitleList>
      <List data={selectedMeal.steps} />
    </ScrollView>
  );
};

export default MealDetialsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginVertical: 8,
  },
});
