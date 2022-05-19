
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebaseClient';
import {
    createUserWithEmailAndPassword, onAuthStateChanged, signOut,
    signInWithEmailAndPassword, sendPasswordResetEmail,
    updateEmail, updatePassword
} from 'firebase/auth'

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [isUserLoggedIn, setUserLoggedIn] = useState(false)

    const signup = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = async () => {
        await signOut(auth)
        setUserLoggedIn(false);
    }

    const resetPassword = async (email) => {
        await sendPasswordResetEmail(auth, email)
    }

    const updateNewEmail = (email) => {
        updateEmail(auth.currentUser, email)
    }


    const updateNewPassword = (newPassword) => {
        updatePassword(auth.currentUser, newPassword)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)

            if (user) {
                setUserLoggedIn(true);
            }
            setLoading(false)
        })

        return unsubscribe
    }, [])

    console.log('isUserLoggedIn: ', isUserLoggedIn)

    const value = {
        currentUser,
        isUserLoggedIn,
        signup,
        logIn,
        logOut,
        resetPassword,
        updateNewEmail,
        updateNewPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

