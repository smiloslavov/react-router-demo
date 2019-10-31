import React from 'react';
import { Redirect, Route } from "react-router-dom";
import authService from './authService';

const PrivateRoute = ({component: ComponentToRender, ...rest}) => (
    <Route {...rest}
    render={ (props) => ( 
        authService.isAuthenticated() ?
            <ComponentToRender {...props} />
        :   <Redirect to={'/login'} /> 
    )}
    />
);

export default PrivateRoute;