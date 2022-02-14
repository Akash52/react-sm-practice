import React, {FC} from 'react';
import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const About: FC = () => {
    return (
        <div className="container">
            <h2>I think your lost 😃</h2>
            <strong>404</strong>
            <Link to="/" className="btn">
                <FaHome />
                Back To Home
            </Link>
        </div>
    );
};

export default About;
