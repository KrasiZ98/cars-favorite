import { createContext, useState } from "react";
import useLocalStorage from "../custom-hooks/hook-localStorage/useLocalStorage";
import * as userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const key = 'user_data_localStorage';

    const [user, setUser] = useLocalStorage(key, []);
    const [serverError, setServerError] = useState(null);
    const [successLogin, setSuccessLogin] = useState(false);
    const [successRegister, setSuccessRegister] = useState(false);
    const navigate = useNavigate();

    async function userRegister(formValue) {
      

        const availableUsers = await userServices.getAllUsers();

        const existingEmail = availableUsers.find(x => x.email === formValue.email);
        if (existingEmail) {
            setServerError('The email alredy taken!!!');
            setSuccessRegister(false);
            setTimeout(() => {
                setServerError(null);
            }, 4000);
            return;
        }

        const existingUsername = availableUsers.find(x => x.username === formValue.username);
        if (existingUsername) {
            setServerError('The username alredy taken!!!');
            setSuccessRegister(false);
            setTimeout(() => {
                setServerError(null);
            }, 4000)
            return serverError;
        }

        await userServices.register(formValue);
        setSuccessRegister(true);
        setTimeout(() => {
            setSuccessRegister(false);
        }, 3000)
        setUser(formValue);
        navigate('/');

    }

    async function userLogin(formValue) {
        const availableUsers = await userServices.getAllUsers();
        const existingUser = availableUsers.find(x => x.email === formValue.email);
        if (existingUser === undefined) {
            setServerError('Login or Password don\t match!!!');
            setSuccessLogin(false);
            setTimeout(() => {
                setServerError(null);
            }, 4000);
            return serverError;
        }

        if (existingUser.password !== formValue.password) {
            setServerError('Login or Password don\t match!!!');
            setSuccessLogin(false);
            setTimeout(() => {
                setServerError(null);
            }, 4000);
            return serverError;
        }

        setSuccessLogin(true);
        setTimeout(() => {
            setSuccessLogin(false);
        }, 3000);
        setUser(existingUser);
        navigate('/');
    }


    function userLogout() {
        setUser({});
        navigate('/');
        localStorage.clear(key);
    }
    return (
        <UserContext.Provider value={{ user,setUser, successLogin, successRegister, serverError, userRegister, userLogin, userLogout }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;