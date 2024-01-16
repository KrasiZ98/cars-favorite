import './navigation.css'
import React, { useContext } from 'react'
import { FaRegUserCircle } from "react-icons/fa"
import { GrFavorite } from "react-icons/gr";
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export const Navigation = () => {
    const { user } = useContext(UserContext);
    
    return (
        <header className='header'>

            <div className='logo'>
                <img src="https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg" />
                <h1>Cars Sell</h1>
            </div>

            <nav className='navigation'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    {user.email ?
                        <>
                            <li>
                                <Link to='/profile'>
                                    <FaRegUserCircle className='user-icon' />
                                </Link>
                            </li>
                            <li>
                                <Link to='/favorite_list'>
                                    <GrFavorite className='user-icon' />
                                    <span>{user.favoriteList.length}</span>
                                </Link>
                            </li>
                        </>
                        : <li>
                            <Link to="/login">Login</Link>
                        </li>}

                </ul>
            </nav>

        </header>
    )
}
