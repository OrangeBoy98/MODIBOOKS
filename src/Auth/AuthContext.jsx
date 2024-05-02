import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
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
    alert("로그아웃되었습니다.");
    navigate('/', { replace: true });
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
