import React, {FC} from 'react';
import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const About: FC = () => {
    return (
        <div>
            <h1>I think yout lost 🌚</h1>
            <Link to="/" className="btn btn-primary btn-lg">
                <FaHome className="mr-2" />
                Back To Home
            </Link>
        </div>
    );
};

export default About;
