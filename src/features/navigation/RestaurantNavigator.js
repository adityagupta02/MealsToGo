import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import RestaurantScreen from '../restaurants/components/RestaurantScreen';


const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = ()=>{
    return(
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen
                name = "Restaurant" 
                component={RestaurantScreen}                
                options={{ headerShown: false }}/>
        </RestaurantStack.Navigator>
    )
}