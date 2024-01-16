import { createContext, useContext, useState } from "react";
import useGetAllCars from "../custom-hooks/hooks-requests/useGetAllCars";
import useCarLocalStorage from "../custom-hooks/hook-localStorage/useCarLocalStorage";
import { UserContext } from "./UserContext";

export const CarContext = createContext();

const CarContextProvider = (props) => {

    const key = 'favoriteCar_data_localStorage';

    const [cars, setCars] = useGetAllCars([]);
    const { user, setUser } = useContext(UserContext);
    const [favoriteCars, setFavoriteCars] = useCarLocalStorage(key, []);

    
    function addFavoriteCar(car) {
        const isAlreadyFavorite = favoriteCars.find(x => x.id === car.id)
        if (isAlreadyFavorite) {
            return alert('You alredy add this car')
        }
        const updatedUserList = {
            ...user,
            favoriteList: [...user.favoriteList, car]
        }
        setUser(updatedUserList);
        setFavoriteCars(oldCars => [...oldCars, car]);
    }

    function deleteFavoriteCar(car) {
        const updatedUserList = {
            ...user,
            favoriteList: user.favoriteList.filter(x => x.id !== car.id)
        }
        setUser(updatedUserList);
        setFavoriteCars(favoriteCars.filter(x => x.id !== car.id));
    }

    return (
        <CarContext.Provider value={{ cars, favoriteCars, addFavoriteCar, deleteFavoriteCar }}>
            {props.children}
        </CarContext.Provider>
    )
}

export default CarContextProvider;