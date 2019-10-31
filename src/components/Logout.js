import React from 'react';
import authService from './authService';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        authService.signOut( () => {} );
    }

    render = () => {
        return (
            <Redirect to='/login' />
        );
    }
}
export default Logout;