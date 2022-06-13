import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import RestaurantScreen from './src/features/restaurants/components/RestaurantScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

function HomeScreen() {
  return (
      <RestaurantScreen/>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Restaurants') {
              iconName = 'md-restaurant';
            } else if (route.name === 'Settings') {
              iconName = 'md-settings';
            }
            else if (route.name === 'Map') {
              iconName = 'md-map';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      <Tab.Screen name="Restaurants" component={HomeScreen} />      
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
    </>
  )
}
const styles = StyleSheet.create({
  
});
