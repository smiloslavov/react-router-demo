import React from 'react';
import authService from './authService';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: authService.isAuthenticated()
        }
    }

    render = () => {
        if (this.state.loggedIn) {
            return <Redirect to='/' />;
        }

        return (
            <div>
                <h1>Sign In</h1>
                <Button class='btn btn-primary' onClick={this.login}>Sign In</Button>
            </div>
        );
    }

    login = () => {
        authService.signIn( () => {
            this.setState({ loggedIn: authService.isAuthenticated() })
        } );
    }
}
export default Login;