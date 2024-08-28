import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  user: "",
  login: () => {},
  logout: () => {},
  token: "",
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  

  const login = (userName, password) => {
    if (userName === "admin" && password === "admin") {
      setUser("admin");
      setToken("your-token-here"); 
      return { role: "admin", token: "your-token-here" };
    } else if (userName === "user" && password === "user") {
      setUser("user");
      setToken("your-token-here"); 
      return { role: "user", token: "your-token-here" };
    } else {
      return null;
    }
  };

  const logout = () => {
    setUser("");
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
