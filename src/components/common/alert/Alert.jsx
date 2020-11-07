import React from 'react'

import PropTypes from 'prop-types';

const Alert = ({ variant, message, linkTitle }) => {
    return (
        <div className={`alert alert-${variant} text-center`} role="alert">
            {message} <button type="button" className="btn p-0 btn-link alert-link">{linkTitle}</button>.
        </div>
    )
}

Alert.defaultProps = {
    variant: "danger",
};

Alert.propTypes = {
    variant: PropTypes.string,
};

export default Alert;
