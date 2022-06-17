import React, {createContext, useState} from 'react'

export const FavoritesContext = createContext();

export function FavoritesContextProvider(props) {

    const [favorites, setFavorites] = useState([]);
    const add = (restaurant)=>{
        setFavorites([...favorites, restaurant]);
    }

    const remove = (restaurant)=>{
        const newFavorites = favorites.filter(
            (x)=> x.placeId !== restaurant.placeId
        );
        setFavorites(newFavorites);
    }

  return (
    <FavoritesContext.Provider
        value={{
            favorites,
            addToFavorites : add,
            removeFromFavorites: remove,
        }}>
        {props.children}
    </FavoritesContext.Provider>
  )
}
