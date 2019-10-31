import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const links = [
        {name: 'Prompt', url: '/prompt'},
        {name: 'Props', url: '/props'},
        {name: '404 Error', url: '/foo'},
        {name: 'Color', url: '/color'},
        {name: 'Recursive', url: '/color/Green/00ff00'},
        {name: 'Logging', url: '/logging'},
        {name: 'Private', url: '/private'},
    ];

    let linksComponents = links.map( (link, index) => {
        return (
            <li key={index} className="nav">
                <NavLink to={link.url} activeClassName='activeNavLink' className="navLink">
                    {link.name}
                </NavLink>
            </li>
        );
    });

    return (
        <div className={'leftNavContainer'}>
            <ul>
                <li className="nav">
                    <NavLink to="/" activeClassName='activeNavLink' className="navLink" exact>
                        Home
                    </NavLink>
                </li>
                {linksComponents}
                <Link to='/pets'>
                    <img src='/assets/unicorn.png' width={100} />
                </Link>
            </ul>
        </div>
    );
};

export default Sidebar;