import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }
useEffect(() => {
  if (currentUser) {
    async function GetUserData() {
      const query = db.collection("users").doc(currentUser.email);
      const doc = await query.get();
      if (!doc.exists) {
        setUserName("No existe.");
        setLoading(false);
      } else {
        setUserName(doc.data().firstName + " " + doc.data().lastName);
        setLoading(false);
      }
    }
    return GetUserData;
  }
});
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);      
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  

  function addUserData(firstName, lastName, email) {
    const nemail = email;
    const data = {
      firstName: firstName,
      lastName: lastName,
    };
    return db.collection("users").doc(nemail).set(data);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    addUserData,
    userName
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
