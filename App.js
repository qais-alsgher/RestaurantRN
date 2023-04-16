import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealScreen from "./screens/MealScreen";
import MealDetailsScreen from "./screens/MealDetialsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#361500",
            },
            headerTintColor: "#fff",
            cardStyle: {
              backgroundColor: "#603601",
            },
            animationEnabled: false,
          }}
        >
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="Meal" component={MealScreen} />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
