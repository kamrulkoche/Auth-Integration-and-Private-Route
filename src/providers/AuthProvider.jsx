import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types"; // Correct import for prop-types

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {user, createUser };

  return (
    (
      <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
    )
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Corrected propTypes
};

export default AuthProvider;
