import React, {FC} from 'react';
import {useNavigate, Link} from 'react-router-dom';

const Navbar: FC = () => {
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 bg-gradient-to-r from-slate-800 to-cyan-900 mix-blend-multiply shadow-2xl ">
                <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
                    <div className="relative   flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
                            to="/">
                            <i className="m-2 text-lg text-white opacity-75 fa-solid fa-laptop leading-lg animate-pulse"></i>
                            Simform ReactJS 😃
                        </Link>
                        <button
                            className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            {!navbarOpen ? (
                                <i className="fas fa-bars " />
                            ) : (
                                <>
                                    <i className="fas fa-times" />
                                </>
                            )}
                        </button>
                    </div>

                    <div
                        className={
                            'lg:flex flex-grow  items-center' +
                            (navbarOpen ? ' flex' : ' hidden')
                        }
                        id="example-navbar-danger">
                        <ul className="flex flex-col sticky top-0 z-40 list-none  lg:flex-row lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                                    to="/">
                                    <i className="text-lg text-white opacity-75 fas fa-home leading-lg"></i>
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>
                            <li
                                className="nav-item
                                cursor-pointer
                                flex
                                items-center
                                px-3
                                py-2
                                text-xs
                                font-bold
                                leading-snug
                                text-white
                                uppercase
                                hover:opacity-75"
                                onClick={() => navigate('/deploy')}>
                                <i className="text-lg text-white opacity-75  fa fa-globe"></i>
                                <span className="ml-2">Deploy</span>
                            </li>
                            <li
                                className="nav-item
                                cursor-pointer
                                flex
                                items-center
                                px-3
                                py-2
                                text-xs
                                font-bold
                                leading-snug
                                text-white
                                uppercase
                                hover:opacity-75"
                                onClick={() => navigate('/users')}>
                                <i className="text-lg text-white opacity-75  fa fa-user"></i>
                                <span className="ml-2">Users</span>
                            </li>
                            <li
                                className="nav-item
                                cursor-pointer
                                flex
                                items-center
                                px-3
                                py-2
                                text-xs
                                font-bold
                                leading-snug
                                text-white
                                uppercase
                                hover:opacity-75"
                                onClick={() => navigate('/userPagination')}>
                                <i className="text-lg text-white opacity-75  fas fa-pager"></i>
                                <span className="ml-2">Pagination</span>
                            </li>
                            <li
                                className="nav-item
                                flex
                                items-center
                                cursor-pointer
                                px-3
                                py-2
                                text-xs
                                font-bold
                                leading-snug
                                text-white
                                uppercase
                                hover:opacity-75"
                                onClick={() => navigate('/todos')}>
                                <i className="text-lg text-white opacity-75 fa-solid fa-list-check"></i>
                                <span className="ml-2">Todo</span>
                            </li>
                            <li
                                className="nav-item flex items-center px-3 cursor-pointer py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                                onClick={() => navigate('/ipinfo')}>
                                <i className="text-lg text-white opacity-75 fas fa-server"></i>
                                <span className="ml-2">IpInfo</span>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                                    to="/about">
                                    <i className="text-lg text-white opacity-75 fas fa-question leading-lg"></i>
                                    <span className="ml-2">About</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
