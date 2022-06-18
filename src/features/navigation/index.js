import React from 'react'

import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {AppNavigator} from './AppNavigator';
import { LoginScreen } from '../login/screens/LoginScreen';


const AppStack = createStackNavigator();

export const Navigation = ()=>{
    return(
        <NavigationContainer>
        <AppStack.Navigator>
            <AppStack.Screen
                name = "Login" 
                component= {LoginScreen}                
                options={{ headerShown: false }}/>
            <AppStack.Screen
                name = "AppNavigator" 
                component={AppNavigator}                
                options={{ headerShown: false }}/>
        </AppStack.Navigator> 
        </NavigationContainer>       
    )
}