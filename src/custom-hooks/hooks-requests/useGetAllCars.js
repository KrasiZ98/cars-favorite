import React, { useEffect, useState } from 'react'

export default function useGetAllCars(initialValue) {
    const [cars, setCars] = useState(initialValue);

    useEffect(() => {
        fetch('http://localhost:3004/cars')
            .then((resposne) => resposne.json())
            .then((result) => setCars(result))
    }, []);

    return [cars, setCars];
}
