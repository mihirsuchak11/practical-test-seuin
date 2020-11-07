import React, { useState, useRef, useCallback } from 'react';

import UserCard from './UserCard';

import useUsersList from '../../customHooks/useUserList';
import Loading from '../common/loading';
import Alert from '../common/alert';
import PageHeader from '../pageHeader';

export default function App() {
    const [pageNumber, setPageNumber] = useState(1);

    const {
        users,
        hasMore,
        loading,
        error
    } = useUsersList(pageNumber)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if(node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <>
            {!error && <PageHeader pageNumber={pageNumber} loading={loading} totalUsers={users && users.length} />}
            <section className="container user-cards-section">
                <ul className="list-unstyled">
                    <div className="row">
                        {users && users.map((user, index) => {
                            if(users.length === index + 1) {
                                return <UserCard forwardRef={lastBookElementRef} key={index} details={user} />
                            } else {
                                return <UserCard key={index} details={user} />
                            }
                        })}
                    </div>
                </ul>
                <div className="text-center">{loading && <Loading />}</div>
                {error && <Alert message="Something went wrong, Give it a try one more time!" linkTitle="Click Here" />}
            </section>
        </>
    )
}
