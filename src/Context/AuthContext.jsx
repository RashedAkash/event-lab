import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
export const FirebaseContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  //google
  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // ‍sign up
  const signUp = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // ‍sign in
  const signIn = (email,password) => {
  return  signInWithEmailAndPassword(auth, email, password)
  }
  //manage user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //log out
  const LogOut = () => {
    return signOut(auth);
  };

 
   
  //value
  const authInfo = {
    googleSignUp,
    signUp,
    signIn,
    user,
    LogOut
  }
  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthContext;