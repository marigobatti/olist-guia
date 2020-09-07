import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export const publicRoutes = ['/', '/planos', '/conteudo', '/login'];
export const authRoutes = ['/painel', '/premios' ];


export const PublicRoute = ({component: Component, restricted, ...rest}) => {
  const { logged } = useAuth()
;  return (
    <Route {...rest} render={props => (
        logged ?
            <Redirect to="/" exact />
        : <Component {...props} />
    )} />
  );
};

export const PrivateRoute = ({component: Component, ...rest}) => {
  const { logged } = useAuth()
  return (
    <Route {...rest} render={props => (
        logged ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};