import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthProvider = createContext(null)

const AuthContributor = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(true);

    const createUser = (email,password) =>{
        setLoad (true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        setLoad(true)
        return signInWithEmailAndPassword (auth,email,password)
    }

    const logoutUser =()=>{
        setLoad(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser);
            setLoad(false)
        });

        return () => {
            return unsubscribe()
        }
    }, [])

    const providerInfo = {
        user,
        load,
        createUser,
        loginUser,
        logoutUser
    }
    return (
        <AuthProvider.Provider value={providerInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContributor;
AuthContributor.propTypes = {
    children: PropTypes.node
}