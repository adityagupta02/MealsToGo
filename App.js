import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

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
