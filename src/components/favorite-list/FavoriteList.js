import { CarContext } from '../../context/CarContext'
import { FavoriteCard } from './FavoriteCard';
import './favoriteList.css'
import React, { useContext } from 'react'

export const FavoriteList = () => {
    
    const { favoriteCars } = useContext(CarContext);

   

    return (
        <>
            <header className='favorite_header'>
                <h1>Favorite List Page</h1>
            </header>

            <div className="favorite_container">
                <h2>Favorite List</h2>
                <ul>

                    {favoriteCars.length > 0 ?
                        favoriteCars.map(car => <FavoriteCard key={car.id} car={car} />)
                        : <h1>No results</h1>}
                </ul>
            </div>
        </>
    )

}
