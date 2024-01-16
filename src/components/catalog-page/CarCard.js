import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { CarContext } from '../../context/CarContext';

export const CarCard = ({ car }) => {
    const { user } = useContext(UserContext);
    const { addFavoriteCar} = useContext(CarContext);
   
    return (
        <div className="car-card">
            <img src={car.image} alt={`${car.year} ${car.model}`} />
            <div className="car-details">
                <h3>{car.model} {car.make}</h3>
                <p>Transmission: {car.transmission}</p>
                <p>Fuel Type: {car.fuelType}</p>
                <p>Year: {car.year}</p>
            </div>
            {/* <div className="buttons">
                <Link to={`/details/${car.id}`}><button className="details-button">Details</button> </Link>
                {user.email &&  car.disabled === false && <>
                    <button onClick={() => addFavoriteCar(car)} className="add-button">Add</button>
                </>} 
                {user.email && car.disabled === true && 
               <button disabled className="add-button">Add</button> }
            </div> */}
                <div className="buttons">
                <Link to={`/details/${car.id}`}>
                    <button className="details-button">Details</button>
                </Link>
                {user.email && !car.disabled && (
                    <button onClick={() => addFavoriteCar(car)} className="add-button">
                        Add
                    </button>
                )}
                {user.email && car.disabled && (
                    <button disabled className="add-button_disabled">
                        Add
                    </button>
                )}
            </div>
        </div>
    );

}
