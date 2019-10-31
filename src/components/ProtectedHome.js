import React from 'react';
import { Link } from "react-router-dom";

const ProtectedHome = ({match}) => {
    return (
        <div>
            <h1>Protected Page</h1>
            <p>This page is protected.</p>
            <Link className='btn btn-primary' to={'/logout'}>Sign Out</Link>
        </div>

    );
};

export default ProtectedHome;