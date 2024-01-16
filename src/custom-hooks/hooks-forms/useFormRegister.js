import React, { useContext, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import registerValidation from '../../components/register-page/registerValidation';
import { UserContext } from '../../context/UserContext';

export default function useFormRegister() {

    const { userRegister } = useContext(UserContext);

    const [formValue, setFormValue] = useState({
        email: '',
        username: '',
        password: '',
        reppass: '',
        image: '',
        _id: uuidv4(),
        favoriteList: [],
    });

    const [formError, setFormError] = useState([]);

    function onChange(e) {
        setFormValue(oldVlue => ({
            ...oldVlue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = registerValidation(formValue);
        setFormError(error);
        setTimeout(() => {
            setFormError([]);
        }, 4000)

        if (Object.values(error).length === 0) {
            userRegister(formValue);
        }
    }

    return { formValue, formError, onChange, onSubmit };
}
