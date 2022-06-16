import React from 'react';
import { RestaurantRequest } from './src/services/restaurants/RestaurantRequest';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import RestaurantScreen from './src/features/restaurants/components/RestaurantScreen';

import { RestaurantsContextProvider } from './src/services/restaurants/RestaurantContext';
import { LocationContextProvider } from './src/services/location/LocationContext';
import { Navigation } from './src/features/navigation';

export default function App() {
  return (
    <>   
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation/>         
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </>
  )
}
const styles = StyleSheet.create({
  
});
