import React, { useEffect, useState } from 'react'

function getLocalStorage(key, initialValue) {
    const userData = JSON.parse(localStorage.getItem(key));
    if (userData instanceof Function) {
        return userData();
    }

    return userData ? userData : initialValue;
}

export default function useLocalStorage(key, initialValue) {
    const [user, setUser] = useState(() => {
        return getLocalStorage(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(user));
    }, [key, user]);

    return [user, setUser];
}
