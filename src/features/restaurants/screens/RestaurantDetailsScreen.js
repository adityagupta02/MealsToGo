import React from 'react'
import { SafeAreaView } from 'react-native'
import RestaurantInfoCard from '../components/RestaurantInfoCard';

export default function RestaurantDetailsScreen({route}) {
    const {restaurant} = route.params;
  return (
    <>
        <SafeAreaView>
            <RestaurantInfoCard data={restaurant}/>
        </SafeAreaView>    
    </>
  )
}
