import React, { createContext } from "react";
import PropTypes from "prop-types"; // Correct import for prop-types

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = { name: "nodi,sagor,bil" };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Corrected propTypes
};

export default AuthProvider;
