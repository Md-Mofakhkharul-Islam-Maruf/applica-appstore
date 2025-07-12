import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../pages/firebase/firebase.config';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()

    const createUser = (email, password, photoURL, displayName) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, photoURL, displayName)
    }

    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
      const signInWithGoogle = () => {
        setLoading(true)
       return signInWithPopup(auth, provider) 
    }

      const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
        useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log('User in the authState: ', currentUser)
        })
        // return unSubscribe()
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        loading,
        user,
        createUser,
        singInUser,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;