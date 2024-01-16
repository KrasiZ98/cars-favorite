import { UserContext } from '../../context/UserContext';
import useFormRegister from '../../custom-hooks/hooks-forms/useFormRegister'
import { ErrorBox } from '../error-box/ErrorBox';
import './register.css'
import React, { useContext } from 'react'

export const Register = () => {
   const { formValue, formError, onChange, onSubmit } = useFormRegister();
   const { serverError } = useContext(UserContext);
  
   return (
      <>
         {serverError && <ErrorBox error={serverError} />}
         {formError.email && <ErrorBox error={formError.email} />}
         {formError.username && <ErrorBox error={formError.username} />}
         {formError.password && <ErrorBox error={formError.password} />}
         {formError.reppass && <ErrorBox error={formError.reppass} />}
         {formError.image && <ErrorBox error={formError.image} />}
         <div className='form-conteiner-register'>
            <form onSubmit={onSubmit}>
               <h2>Register</h2>

               <div className='form-group'>
                  <label htmlFor='email'>Email:</label>
                  <input type="text" id="email" name="email"
                     onChange={onChange} value={formValue.email} />
               </div>

               <div className='form-group'>
                  <label htmlFor='username'>Username:</label>
                  <input type="text" id="username" name="username"
                     onChange={onChange} value={formValue.username} />
               </div>

               <div className='form-group'>
                  <label htmlFor='password'>Password:</label>
                  <input type="password" id="password" name="password"
                     onChange={onChange} value={formValue.password} />
               </div>

               <div className='form-group'>
                  <label htmlFor='reppass'>Confirm Password:</label>
                  <input type="password" id="reppass" name="reppass"
                     onChange={onChange} value={formValue.reppass} />
               </div>

               <div className='form-group'>
                  <label htmlFor='image'>Image:</label>
                  <input type="text" id="image" name="image"
                     onChange={onChange} value={formValue.image} />
               </div>

               <div className='btn-div'>
                  <button type="submit">Register</button>
               </div>
            </form>
         </div>
      </>
   )
}
