import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView, FlatList} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from './RestaurantInfoCard';

export default function RestaurantScreen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurant = {
    name : "Taj Hotel",
    icon:"",
    photos : ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",],
    address : "100 some random street",
    isOpenNow : true,
    rating : 4,
    isClosedTemporarily:false,
  };

  return (

    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        </View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          {/* <ScrollView>
          <RestaurantInfoCard data={restaurant}/>
          <RestaurantInfoCard data={restaurant}/>
          <RestaurantInfoCard data={restaurant}/>
          <RestaurantInfoCard data={restaurant}/>
          </ScrollView> */}
          <FlatList data={[{name:"a"},{name:"b"},{name:"a"},{name:"b"}]} renderItem={()=>(<RestaurantInfoCard data={restaurant}/>)}/>

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
    backgroundColor:"powderblue",
    padding:15,
  },
});
