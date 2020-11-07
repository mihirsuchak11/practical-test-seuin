import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ btnTitle, onClick }) => {
    return (
        <button type="button" className="btn btn-primary text-uppercase" onClick={onClick}>{btnTitle}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    btnTitle: PropTypes.string.isRequired
};

export default Button;
