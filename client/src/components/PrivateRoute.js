import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
    <Route {...rest} render={(props) => {
        console.log("logged in ", true)
        return (loggedIn === "yes" ? <Component {...props} /> : <Redirect to="/login" />)
    }} />
)


export default PrivateRoute;