import { FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../assets/data/dummy-data";
import { useState, useEffect, useLayoutEffect } from "react";
import MealOverview from "../components/MealOverview";

const MealScreen = ({ route, navigation }) => {
  const [displayedMeals, setDisplayedMeals] = useState(null);
  const { categoryId } = route.params;

  useEffect(() => {
    const displayedMeals = MEALS.filter(
      (meal) => meal.categoryIds.indexOf(categoryId) >= 0
    );
    setDisplayedMeals(displayedMeals);

    navigation.setOptions({
      title: CATEGORIES.find((cat) => cat.id === categoryId).title,
    });
  }, [categoryId]);

  const rederMealHandler = (itemData) => {
    return (
      <MealOverview
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(item, index) => item.id}
      renderItem={rederMealHandler}
    />
  );
};

export default MealScreen;
