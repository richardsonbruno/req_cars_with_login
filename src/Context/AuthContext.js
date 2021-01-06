import { createContext, useState } from 'react';
import service from './service'

export const Auth = createContext();

function AuthContext({ children }) {

  const [user, setUser] = useState(() => {
    if(localStorage.getItem('user@carsPlatform') === null) {
      return null;
    } else {
      return JSON.parse(localStorage.getItem('user@carsPlatform'));
    }
  });
  const [loading, setLoading] = useState(false);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const json = await service.loginCars(email, password);
      localStorage.setItem('user@carsPlatform', JSON.stringify(json))
      setUser(json);
    } catch (e) {
      alert('E-mail ou senha inválidos');
    } finally {
      setLoading(false);
    }
    setLoading(false);
  }

  const signOut = () => {
    localStorage.removeItem('user@carsPlatform');
    setUser(null);
  }

  return (
    <Auth.Provider value={{ signIn, signOut, loading, user }}>
      {children}
    </Auth.Provider>
  );
}

export default AuthContext;