import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const newProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIN = () => {
        return signInWithPopup(auth, newProvider)
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
            const currentEmail = currentUser?.email || user?.email
            const userEmail = { email: currentEmail }
            if (currentUser) {
                axios.post('https://assigment11-five.vercel.app/jwt', userEmail, { withCredentials: true })
                    .then(data => console.log(data.data))
            }
            else {
                axios.post('https://assigment11-five.vercel.app/logout', userEmail, { withCredentials: true })
                    .then(data => console.log('logout', data.data))

            }

        })

        return () => { unsubscribe() };

    }, [user])







    const authInfo = { user, createUser, signUp, loading, googleLogIN }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};


export default AuthProvider;