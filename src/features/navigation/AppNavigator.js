import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Restaurants" component={HomeScreen} options={{headerShown:false}} />      
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export const AppNavigator = ()=> (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>

);

