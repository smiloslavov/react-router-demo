import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";

class CustomLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <Link {...this.props} onClick={this.handleClick}>
                {this.props.children}
            </Link>
        );
    }

    handleClick = () => {
        let urlParts = this.props.to.split('/');
        const uid = urlParts[urlParts.length - 1];
        alert('Clicking the Link is Logging: ' + uid);
    }
   
};

CustomLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default withRouter(CustomLink);