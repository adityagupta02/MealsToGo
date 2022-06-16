import React, {useContext} from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, FlatList} from "react-native";
import { RestaurantsContext } from '../../../services/restaurants/RestaurantContext';
import RestaurantInfoCard from './RestaurantInfoCard';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { SearchComponent } from './SearchComponent';

export default function RestaurantScreen() {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <>
      <SafeAreaView style={styles.container}>            
        <SearchComponent/>
        {restaurantContext.isLoading && (
          <View style={{position:"absolute", top:"50%", left:"50%"}}>
            <ActivityIndicator size={50} style={{marginLeft:-25}} animating={true} color={Colors.blue300}/> 
            </View>      
         )}
        <View style={{ flex: 1 }}>
          <FlatList data={restaurantContext.restaurants} 
            renderItem={({item})=>(<RestaurantInfoCard data={item}/>)}
            keyExtractor={(item)=>item.name}/>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
