import React from 'react';
import { Route } from "react-router-dom";
import LoggingDefaultMessage from './LoggingDefaultMessage';
import CustomLink from './CustomLink';

const LoggingHome = ({match}) => {
    return (
        <div>
            <h1>Logging Home</h1>

            <h4>
                <CustomLink to={`${match.url}/lorem/asdf`}>Link 1</CustomLink>
                { ' | ' }
                <CustomLink to={`${match.url}/lorem/qwer`}>Link 2</CustomLink>
            </h4>

            <Route path={`${match.url}`} component={LoggingDefaultMessage} />
        </div>
    );
};

export default LoggingHome;