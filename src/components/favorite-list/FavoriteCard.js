import React, { useContext } from 'react'
import { CarContext } from '../../context/CarContext'

export const FavoriteCard = ({ car }) => {
    const {deleteFavoriteCar} = useContext(CarContext);
  
    return (

        <li>
            <img src={car.image} alt={car.make} />
            <p> {car.make} {car.model}</p>
            <p>Fuel: {car.fuelType}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Price: {car.price}</p>
            <button onClick={(() => deleteFavoriteCar(car))} className='del-btn'>Delete</button>
        </li>

    )
}


// year
// fuelType
// transmission
// price