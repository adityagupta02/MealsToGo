import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { RestaurantsContextProvider } from './src/services/restaurants/RestaurantContext';
import { LocationContextProvider } from './src/services/location/LocationContext';
import { Navigation } from './src/features/navigation';
import { FavoritesContextProvider } from './src/services/favorites/FavoritesContext';


export default function App() {
  return (
    <>
      <FavoritesContextProvider>   
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation/>         
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </>
  )
}
const styles = StyleSheet.create({
  
});
