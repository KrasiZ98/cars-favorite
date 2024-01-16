import './home.css'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { InfoBox } from '../info-box/InfoBox'

export const Home = () => {
    const { successRegister, successLogin } = useContext(UserContext);
    return (
        <>
      
            {successLogin && <InfoBox title="Successful Login" />}
            {successRegister && <InfoBox title="Successful Register" />}
            <div className="home-container">
                <h1>Welcome to CarShop!</h1>
                <img src="https://cdn4.vectorstock.com/i/1000x1000/63/58/car-logo-vector-36016358.jpg" alt="CarShop Logo" className="logo" />
                <p>Find your dream car with CarShop. Explore our catalog and discover amazing deals on a variety of cars.</p>
                <Link to="/catalog">
                    <button>Explore Catalog</button>
                </Link>
            </div>
        </>
    )
}
