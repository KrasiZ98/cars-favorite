import './login.css'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useFormLogin from '../../custom-hooks/hooks-forms/useFormLogin'
import { ErrorBox } from '../error-box/ErrorBox'
import { UserContext } from '../../context/UserContext'

export const Login = () => {
    const { serverError } = useContext(UserContext);
    const { formValue, formError, onChange, onSubmit } = useFormLogin();
    return (
        <>
            {serverError && <ErrorBox error={serverError} />}
            {formError.email && <ErrorBox error={formError.email} />}
            {formError.password && <ErrorBox error={formError.password} />}
            <div className='form-conteiner'>
                <form onSubmit={onSubmit}>
                    <h2>Login</h2>

                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <input type="text" id="email" name="email"
                            onChange={onChange} value={formValue.email} />
                    </div>



                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type="password" id="password" name="password"
                            onChange={onChange} value={formValue.password} />
                    </div>

                    <div className='btn-div'>
                        <button type="submit">Login</button>
                    </div>
                </form>

                <span>If you don't have accaount<Link to="/register">Register</Link> </span>
            </div>
        </>
    )
}
