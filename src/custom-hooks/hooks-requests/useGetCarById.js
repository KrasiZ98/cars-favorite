import React, { useEffect, useState } from 'react'

export default function useGetCarById(carId, initialValue) {
    const [car, setCar] = useState(initialValue);

    useEffect(() => {
        fetch(`http://localhost:3004/cars/${carId}`)
            .then((resposne) => resposne.json())
            .then((result) => setCar(result))
    }, []);

    return [car, setCar];
}