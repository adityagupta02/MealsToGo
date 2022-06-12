import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function RestaurantInfoCard(props) {
  return (
    <>
    <View style = {{margin:15,}}>
        <Card elevation={10} onPress={()=>{}}>   
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Content>
            <Title  style={{marginTop:10}}>Lorem Ipsum</Title>
            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Paragraph>
          </Card.Content>
        </Card>
        </View>
    </>
  );
}
