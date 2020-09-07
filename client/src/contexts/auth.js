import React, { createContext, useContext, useLayoutEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { api } from '../services';
import { login as loginService } from '../services/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const history = useHistory();

  const [ user, setUser ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  // na primeira reenderização já pega usuário e token armazenados
  useLayoutEffect(() => {
    const loadStorageData = () => {
      setLoading(true);
        const storagedUsername = localStorage.getItem('username');
        const storagedToken = localStorage.getItem('token');

        if (storagedUsername && storagedToken) {
          api.setHeaders({ Authorization: `Bearer ${storagedToken}` });

      setUser(storagedUsername);
      }
      setLoading(false);
    };

    loadStorageData();
    history.push("/painel");
  }, []);

  const login = async (params) => {
    setLoading(true);
    try {
      const response = await loginService(params);

      api.setHeaders({ Authorization: `Bearer ${response.token}` });

      setUser(response.username);

      localStorage.setItem('username', response.username);
      localStorage.setItem('token', response.token);
      history.push("/painel");
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ 
      logged: !!user, 
      user, 
      login, 
      loading, 
      permission: user?.admin ? 'admin' : 'default', 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}