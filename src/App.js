import './style.css'
import { Navigation } from './components/navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/login-page/Login';
import { Home } from './components/home-page/Home';
import { Catalog } from './components/catalog-page/Catalog';
import { Footer } from './components/footer/Footer';
import CarContextProvider from './context/CarContext';
import { FilterCars } from './components/filtered-cars/FilterCars';
import { Register } from './components/register-page/Register';
import { Details } from './components/details-page/Details';
import UserContextProvider from './context/UserContext';
import { Profile } from './components/profile-page/Profile';
import { FavoriteList } from './components/favorite-list/FavoriteList';

function App() {
  return (
    <>


      <UserContextProvider>
        <CarContextProvider >
          <Navigation />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/favorite_list' element={<FavoriteList />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/filtered_cars' element={<FilterCars />} />
          </Routes>
        </CarContextProvider>
      </UserContextProvider>
      <Footer />
    </>
  );
}

export default App;
