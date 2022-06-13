import React, { useState, createContext, useEffect} from "react";
import { RestaurantRequest, RestaurantTransform } from "./RestaurantRequest";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      RestaurantRequest()
        .then(RestaurantTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
          console.log(results.length);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
    
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{
        restaurants,
        isLoading,
        error,
      }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
