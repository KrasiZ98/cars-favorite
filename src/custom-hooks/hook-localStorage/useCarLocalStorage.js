import React, { useEffect, useState } from 'react'

function getCarLocalSrorage(key, initialValue) {
    const carData = JSON.parse(localStorage.getItem(key));
    if (carData instanceof Function) {
        return carData();
    }

    return carData ? carData : initialValue;
}

export default function useCarLocalStorage(key, initialValue) {
    const [favoriteCars, setfavoriteCars] = useState(() => {
        return getCarLocalSrorage(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(favoriteCars));
    }, [key, favoriteCars]);

    return [favoriteCars, setfavoriteCars];
}
