import React, {FC} from 'react';
import {FaHome, FaUser, FaQuestion} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Navbar: FC = () => {
    const navigate = useNavigate();

    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li
                        className="navbarListItem"
                        onClick={() => navigate('/')}>
                        <FaHome />
                        <p>Home</p>
                    </li>
                    <li
                        className="navbarListItem"
                        onClick={() => navigate('/profile')}>
                        <FaUser />
                        <p>Profile</p>
                    </li>
                    <li
                        className="navbarListItem"
                        onClick={() => navigate('/about')}>
                        <FaQuestion />
                        <p>About</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Navbar;
