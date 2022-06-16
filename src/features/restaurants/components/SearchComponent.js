import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/LocationContext";

export const SearchComponent = () => {
  const locationContext = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(locationContext.keyword);

  return (
    <View style={{ height: 80, justifyContent: "center", padding: 15 }}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        onSubmitEditing={() => {
          locationContext.search(searchQuery);
        }}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </View>
  );
};
