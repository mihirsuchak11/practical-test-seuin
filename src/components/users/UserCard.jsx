import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import Tag from '../common/badge'
import Button from '../common/button';

import { variants } from '../../utils/helper';
import { HeartIcon } from '../common/icons/Icons';

import './UserCard.scss';

const UserCard = ({ details = {}, forwardRef }) => {
    const { gender = "", picture: { medium } = {}, dob: { date = "", age = "" } = {}, name: { title = "", first = "", last = "" }, phone } = details;
    return (
        <li className="col-xs-12 col-sm-6 col-md-4 mb-4" ref={forwardRef}>
            <div className="card h-100">
                <div className="card-top">
                    <div className="card-top-backdrop">
                        <Button btnTitle="Buy" />
                    </div>
                    <img src={medium} className="card-img-top" alt="..." />
                    {/* // Generating different colors on badge */}
                    <Tag title={gender} variant={variants[Math.floor((Math.random() * 6) + 1)]} />
                </div>
                <div className="card-body">
                    {gender === "female" ?
                        // I have intentionally added repetitive tags to show ellipse (...) on second line as per the design
                        <h5 className="card-title mb-2 font-weight-bold">{title} {first} {last} {title} {first} {last} {title} {first} {last} {title} {first} {last} {title} {first} {last} {title} {first} {last}</h5> :
                        <h5 className="card-title mb-2 font-weight-bold">{title} {first} {last}</h5>}
                    <p className="card-text font-weight-bold mb-0">Dob: {dayjs(date).format('MMMM D')} | {dayjs(date).format('h:mm A')}</p>
                    <p className="card-text font-weight-bold mb-0">Age: {age}</p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between mt-2">
                    <p className="card-text mb-0 font-weight-bold">{phone}</p>
                    {HeartIcon}
                </div>
            </div>
        </li>
    )
}

UserCard.propTypes = {
    details: PropTypes.object.isRequired,
    forwardRef: PropTypes.any
};

export default UserCard