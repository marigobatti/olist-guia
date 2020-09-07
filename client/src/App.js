import React from 'react';
import {
  BrowserRouter,
  Switch
} from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './navigation/routes';
import Home from './views/Home';
import Painel from './views/Painel';
import Login from './views/Login';
import AppNavigation from './navigation/AppNavigation';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <AppNavigation />
          <Switch>
            <PublicRoute component={Home} path='/' exact />
            <PrivateRoute component={Painel} path='/painel' />

            {/* <PublicRoute component={SignIn} path='/planos' exact /> */}
            {/* <PublicRoute component={Dashboard} path='/conteudo' exact /> */}
            <PublicRoute component={Login} path='/login' exact />
            {/* <PrivateRoute component={Premio} path='/premios' /> */}
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
