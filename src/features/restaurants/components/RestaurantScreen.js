import React, {useContext} from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, FlatList} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsContext } from '../../../services/restaurants/RestaurantContext';
import RestaurantInfoCard from './RestaurantInfoCard';
import { ActivityIndicator, Colors } from 'react-native-paper';

export default function RestaurantScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  // const restaurant = {
  //   name : "Taj Hotel",
  //   icon:" ",
  //   photos : ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",],
  //   address : "100 some random street",
  //   isOpenNow : true,
  //   rating : 4,
  //   isClosedTemporarily:false,
  // };
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <>
      <SafeAreaView style={styles.container}>       
        <View style = {styles.searchBar}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        </View>
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
  searchBar: {
    height:80,
    justifyContent: "center",
    padding:15,
  },
});
