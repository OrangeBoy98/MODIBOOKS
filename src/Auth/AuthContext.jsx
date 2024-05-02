import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (id, password, dbUsers) => {
    const foundUser = dbUsers.find(u => u.id === id && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      setIsAdmin(foundUser.id === 'root');  // Set admin status if the user is 'root'
    }
    return foundUser;
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
