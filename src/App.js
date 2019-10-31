import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './components/Home';
import NameForm from './components/NameForm';
import PropViewer from './components/PropViewer';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/ColorSwatch';
import LoggingHome from './components/LoggingHome';
import ProtectedHome from './components/ProtectedHome';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import RecursiveColorSwatch from './components/RecursiveColorSwatch';
import Unicorn from './components/Unicorn';

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className='rightContentContainer'>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/prompt' component={NameForm} exact />
                        <Route path='/props' component={PropViewer} />
                        <Route path='/logging' component={LoggingHome} />
                        <Route path='/color/:text/:color' component={RecursiveColorSwatch} />
                        <Route path='/color' render={ () => {
                            return <ColorSwatch color='#ff0000' text='Red' />
                        }} />
                        <PrivateRoute path='/private' component={ProtectedHome} />
                        <Route path='/login' component={Login} />
                        <Route path='/logout' component={Logout} />
                        <Route path='/unicorn' component={Unicorn} />
                        <Redirect to='/unicorn' from='/pets' />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};


export default App;