import React, {FC} from 'react';
import {Link} from 'react-router-dom';

const About: FC = () => {
    return (
        <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
            <p className="text-sm font-semibold tracking-wide text-gray-900 uppercase focus-within:text-opacity-50">
                404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
                Uh oh! I think you’re lost.
            </h1>
            <p className="mt-2 text-lg font-medium text-gray-800 text-opacity-50">
                It looks like the page you’re looking for does not exist.
            </p>
            <div className="mt-6">
                <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 text-opacity-75 bg-gray-700 bg-opacity-75 border border-transparent rounded-md sm:bg-opacity-25 sm:hover:bg-opacity-50">
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default About;
