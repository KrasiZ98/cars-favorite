import { useParams } from 'react-router-dom'
import './details.css'
import React from 'react'
import useGetCarById from '../../custom-hooks/hooks-requests/useGetCarById';

export const Details = () => {
    const { id } = useParams();
    const [car, setCar] = useGetCarById(id, []);

    return (
        <div className="details-container">
            <h2>{car.make} {car.model} Details</h2>
            <div>
                <img src={car.image} alt={car.model} />
            </div>
            <div>
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Fuel Type: {car.fuelType}</p>
                <p>Transmission: {car.transmission}</p>
            </div>
        </div>
    )
}
