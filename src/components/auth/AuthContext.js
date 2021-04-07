import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from '../../firebase/firebase';

export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [userUid, setUserUid] = useState(null)

    function signup(email, password, fullName) {
        return auth.createUserWithEmailAndPassword(email, password).then(cred => {
            return db.collection("users").doc(cred.user.uid).set({
                email: email,
                fullName: fullName
            })
        });
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setUserUid(user.uid)
            setLoading(false);
        })

        return unsubscribe
    }, []);
    

    const value = {
        currentUser,
        userUid,
        login,
        signup,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


export default AuthProvider;