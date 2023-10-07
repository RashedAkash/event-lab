import React, { createContext, useContext } from 'react';
export const FirebaseContext = createContext(null);
const AuthContext = ({ children }) => {
  
  //value
  const authInfo = {
   
  }
  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthContext;