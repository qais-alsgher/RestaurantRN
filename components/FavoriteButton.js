import { View, Pressable, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const FavoriteButton = ({ mealId }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <View style={styles.favoriteButton}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => {
          backgroundColor: pressed ? "#ccc" : null;
        }}
        onPress={() => {
          if (favoriteList.includes(mealId)) {
            setFavoriteList(favoriteList.filter((item) => item !== mealId));
          } else {
            setFavoriteList([...favoriteList, mealId]);
          }
        }}
      >
        <MaterialIcons
          name="favorite"
          size={24}
          color={favoriteList.includes(mealId) ? "red" : "white"}
        />
      </Pressable>
    </View>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  favoriteButton: {
    padding: 10,
  },
});
