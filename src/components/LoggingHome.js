import React from 'react';
import { Route } from "react-router-dom";
import LoggingDefaultMessage from './LoggingDefaultMessage';
import CustomLink from './CustomLink';
import CustomRoute from './CustomRoute';

const LoggingHome = ({match}) => {
    return (
        <div>
            <h1>Logging Home</h1>

            <h4>
                <CustomLink to={`${match.url}/lorem/asdf`}>Link 1</CustomLink>
                { ' | ' }
                <CustomLink to={`${match.url}/lorem/qwer`}>Link 2</CustomLink>
            </h4>

            <CustomRoute path={`${match.url}/lorem/:uid`} component={LoggingDefaultMessage} />
            <Route path={`${match.url}`} component={LoggingDefaultMessage} exact />
        </div>
    );
};

export default LoggingHome;