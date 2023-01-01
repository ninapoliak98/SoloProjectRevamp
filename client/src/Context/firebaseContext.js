import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {Navigate, useNavigate} from "react-router-dom";

const AuthContext = React.createContext();
const provider = new GoogleAuthProvider();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const navigate  = useNavigate();

    function loginGoogle() {
        return auth.signInWithPopup(provider).then(function(result) {
            const token = result.credential.accessToken;
            const user = result.user;
            console.log(token)
            console.log(user)
            }).catch((e)=> {
                console.log('error login in with google')
            });
    }

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        return auth.signOut();
    }
    function passwordReset(email) {
        return auth.sendPasswordResetEmail(email);
    }
    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
            //after user is set we automatically redirect to dashboard
            navigate("/")

        })
    }, [])


    const value = {
        currentUser,
        loginGoogle,
        login,
        logout,
        signup,
        passwordReset
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
