import React from 'react'
import RestaurantScreen from './src/features/restaurants/components/RestaurantScreen';
import {createStackNavigator} from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = ()=>{
    return(
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen
                name = "Restaurant"
                component={RestaurantScreen}/>
        </RestaurantStack.Navigator>
    )
}