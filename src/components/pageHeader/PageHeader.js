import React from 'react';

import './PageHeader.scss';

const PageHeader = ({ pageNumber, totalUsers, loading }) => {
    return (
        <div className="fixed-top page-header text-center">
            Showing {pageNumber} Page(s) of {loading ? '...' : totalUsers} User(s)
        </div>
    )
}

export default PageHeader;
