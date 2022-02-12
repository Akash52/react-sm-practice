import React, {FC} from 'react';
import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const About: FC = () => {
    return (
        <div className="box">
            <h1>I think your lost 😃</h1>
            <Link to="/" className="btn">
                <FaHome />
                Back To Home
            </Link>
        </div>
    );
};

export default About;
