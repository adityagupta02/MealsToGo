import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./RestaurantNavigator";
import MapScreen from "../map/screens/MapScreen";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

// function MapScreen() {
//   return (
//     <MapScreen/>
//   );
// }

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = "md-restaurant";
          } else if (route.name === "Settings") {
            iconName = "md-settings";
          } else if (route.name === "Map") {
            iconName = "md-map";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Restaurants"
        component={RestaurantNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export const AppNavigator = () => (
  <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
);
