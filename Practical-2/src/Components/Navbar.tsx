import React, {FC} from 'react';
import {FaHome, FaCode, FaUser, FaQuestion} from 'react-icons/fa';
import {useNavigate, useLocation} from 'react-router-dom';

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
                        onClick={() => navigate('/hooks')}>
                        <FaCode />
                        <p>Hooks</p>
                    </li>
                    <li
                        className="navbarListItem"
                        onClick={() => navigate('/profile')}>
                        <FaUser />
                        <p>Profile</p>
                    </li>
                    <li
                        className="navbarListItem"
                        onClick={() => navigate('/profile')}>
                        <FaQuestion />
                        <p>Help</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Navbar;
