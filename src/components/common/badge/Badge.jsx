import React from 'react';
import PropTypes from 'prop-types';

import './Badge.scss';

const Badge = ({ title, variant }) => {
    return (
        <span className={`badge badge-${variant} text-uppercase font-weight-normal`}>{title}</span>
    )
}

Badge.defaultProps = {
    variant: 'primary',
};

Badge.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Badge
