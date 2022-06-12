import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from './RestaurantInfoCard';

export default function Restaurant_screen() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        </View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <ScrollView>
          <RestaurantInfoCard/>
          <RestaurantInfoCard/>
          <RestaurantInfoCard/>
          <RestaurantInfoCard/>
          </ScrollView>
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
