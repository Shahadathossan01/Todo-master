import { useEffect, useState } from "react";
import { createContext } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init'
const auth=getAuth(app)
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loader,setLoader]=useState(true)
    const googleProvider=new GoogleAuthProvider()

    const googleLogIn=()=>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        setLoader(true)
        return signOut(auth)
    }

    const signUpWithEaP=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithEaP=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateName=(name)=>{
        return updateProfile(auth.currentUser,{
            displayName:name
        })
    }
    useEffect(()=>{
        setLoader(true)
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
            console.log("auth state changed",currentUser)
        })
        return ()=>{
            unsubscribe();
            setLoader(false)
        }
    },[])
    const authInfo={user,googleLogIn,logOut,loader,setLoader,signUpWithEaP,signInWithEaP,updateName}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;