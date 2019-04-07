import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return loggedIn === 'no' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/todos" />
      );
    }}
  />
);

export default ProtectedRoute;
