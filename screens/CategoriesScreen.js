import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../assets/data/dummy-data";
import CategorieGridTitle from "../components/CategorieGridTitle";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <CategorieGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("Meal", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
