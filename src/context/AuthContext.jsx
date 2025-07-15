import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    if (
      (credentials.username === 'admin' || credentials.email === 'admin@x.com') &&
      credentials.password === 'admin123'
    ) {
      setUser({ username: 'admin', role: 'superadmin' });
    } else {
      setUser({ username: credentials.username, role: 'user' });
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);