import React from 'react';
import { Route } from "react-router-dom";

const CustomRoute = ({component: ComponentToRender, ...rest}) => {
    return (
        <Route {...rest}
            render={ (props) => {
                //do work
                alert("Route is Logging " + props.match.params.uid 
                        + ' , current path: ' + props.match.path);
                return <ComponentToRender {...props} />
            }}
        />
    );
};

export default CustomRoute;