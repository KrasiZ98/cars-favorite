import React, { useContext, useState } from 'react'
import { CarContext } from '../../context/CarContext'
import './catalog.css'
import { CarCard } from './CarCard';


export const Catalog = () => {
   const { cars } = useContext(CarContext);
   const [showCarsSelection, setShowCarSelection] = useState(false);
   const [filterCars, setFilterCars] = useState([]);

   const [selectedValue, setSelectedValue] = useState({
      make: '',
      model: '',
      year: '',
      fuelType: '',
      transmission: '',
   });



   const allMake = [...new Set(cars.map(car => car.make))];
   const allModel = [...new Set(cars.map(car => car.model))];
   const allYear = [...new Set(cars.map(car => car.year))];
   const allFuelType = [...new Set(cars.map(car => car.fuelType))];
   const allTransmission = [...new Set(cars.map(car => car.transmission))];


   function handleClickSelection(showCarsSelection) {
      setShowCarSelection(!showCarsSelection);
   }

   function onChangeSelect(event) {
      setSelectedValue(event.target.value);
   }

   function onSubmitHandler() {

      if (Object.values(selectedValue).some(value => value !== '')) {
         const filterdCars = cars.filter(car => {
            return car.make === selectedValue ||
               car.model === selectedValue ||
               car.fuelType === selectedValue ||
               car.transmission === selectedValue ||
               car.year === Number(selectedValue)
         });

         setFilterCars(filterdCars);
         setSelectedValue({
            make: '',
            model: '',
            year: '',
            fuelType: '',
            transmission: '',
         });

      }

   }



   return (
      <div className="catalog-container">
         <button className='selection_section' onClick={() => handleClickSelection(showCarsSelection)}>Show Cars Selection</button>
         <div className="model-year-selection">
            {/* Model year selection components go here */}
            {showCarsSelection &&
               <div className="model-year-selection">



                  <select onChange={onChangeSelect} value={selectedValue.model}>
                     <option >Model</option>
                     {allModel.map((model, index) => (
                        <option key={index} value={model}> {model}</option>
                     ))}
                  </select>


                  <select onChange={onChangeSelect} value={selectedValue.make}>
                     <option >Make</option>
                     {allMake.map((make, index) => (
                        <option key={index} value={make}> {make}</option>
                     ))}
                  </select>

                  <select onChange={onChangeSelect} value={selectedValue.year}>
                     <option >Year</option>
                     {allYear.map((year, index) => (
                        <option key={index} value={year}> {year}</option>
                     ))}
                  </select>


                  <select onChange={onChangeSelect} value={selectedValue.fuelType}>
                     <option >Fuel Type</option>
                     {allFuelType.map((fuelType, index) => (
                        <option key={index} value={fuelType}> {fuelType}</option>
                     ))}
                  </select>

                  <select onChange={onChangeSelect} value={selectedValue.transmission}>
                     <option >Transmission</option>
                     {allTransmission.map((transmission, index) => (
                        <option key={index} value={transmission}> {transmission}</option>
                     ))}
                  </select>

                  <button onClick={onSubmitHandler} className='btn-submit'>Submit</button>

               </div>}
         </div>
         
         <div className="car-list">
            {filterCars.length > 0 ? (
               filterCars.map((car) => <CarCard key={car.id} car={car} />)
            ) : (
               cars.length > 0 ? (
                  cars.map((car) => <CarCard key={car.id} car={car} />)
               ) : (
                  <h1>Loading...</h1>
               )
            )}
         </div>
      </div>
   )
}


// "make": "Honda",
//             "model": "Accord",
//             "year": 2023,
//             "fuelType": "Hybrid",
//             "transmission": "CVT",