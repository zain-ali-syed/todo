import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
    <Route {...rest} render={(props) => {
        console.log("Loggedin ", loggedIn)
        console.log(loggedIn)
        console.log("-------")
        return (loggedIn === "no" ? <Component {...props} /> : <Redirect to="/todos" />)
    }} />
)


export default ProtectedRoute;