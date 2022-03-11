import React, {FC} from 'react';
import {IUser} from '../../Redux/features/Users/types';

const UserItem: FC<{
    person: IUser;
    handleHover: (user: IUser | null) => void;
}> = ({person, handleHover}) => {
    const handleMouseEnter = () => {
        handleHover(person);
    };
    const handleMouseLeave = () => {
        handleHover(null);
    };

    return (
        <>
            {/* Table Row */}
            <tr key={person.email}>
                <td
                    className="px-6 py-4 whitespace-nowrap"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className="flex items-center  cursor-pointer">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={person.avatar}
                                alt=""
                            />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {person.first_name} {person.last_name}
                            </div>
                            <div className="text-sm text-gray-500">
                                {person.email}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {person.status === 'Active' ? (
                        <p className="px-2 inline-flex justify-between tracking-wider  text-xs leading-5 font-medium  text-green-600">
                            {person.status}
                        </p>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="inline-flex justify-between items-center w-18 rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-xs font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 "
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true">
                                {person.status}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400 cursor-pointer ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </>
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {person.access === 'Owner' ? (
                        <p className="px-2 inline-flex tracking-wider  text-xs leading-5 font-medium  text-gray-600">
                            {person.access}
                        </p>
                    ) : (
                        <>
                            <button
                                type="button"
                                className="inline-flex justify-between items-center w-18 rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-xs font-medium text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true">
                                {person.access}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400 cursor-pointer ml-1"
                                    viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </>
                    )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {person.access === 'Owner' ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-400 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-red-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                        </>
                    )}
                </td>
            </tr>
        </>
    );
};

export default UserItem;
