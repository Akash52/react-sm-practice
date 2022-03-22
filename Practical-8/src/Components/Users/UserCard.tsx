import React, {FC} from 'react';
import {IUser} from '../../Redux/features/Users/types';

const UserCard: FC<{user: IUser | null}> = ({user}) => {
    return (
        <div className={`profile-card ${user !== null ? 'show' : 'hide'}`}>
            {user !== null && (
                <>
                    <div className="flex items-center justify-center w-full h-full py-8 px-4">
                        <div className="w-80 bg-white shadow-2xl flex justify-center flex-col items-center rounded-3xl p-5">
                            <img
                                className="w-24 h-24 object-cover rounded-full mb-4"
                                src={user.avatar}
                                alt=""
                            />
                            <p className="text-sm  leading-5 font-medium mb-1 text-center text-gray-900  relative">
                                {user.first_name} {user.last_name}{' '}
                                {user.status === 'Active' ? (
                                    <span className="absolute top-0 right-0 translate-x-3 block h-2 w-2 rounded-full ring-2 ring-white bg-green-300" />
                                ) : (
                                    <span className="absolute top-0 right-0 translate-x-3 block h-2 w-2 rounded-full ring-2 ring-white bg-red-300" />
                                )}
                            </p>
                            <p className="text-sm font-normal leading-5 mb-1  text-gray-500  text-center ">
                                {user.email}
                            </p>
                            <p className="text-sm font-semibold  leading-5 mb-2  text-gray-800  text-center ">
                                Your Plan: {user.plan}
                            </p>

                            <div className="flex items-center justify-center">
                                {user.status === 'Active' ? (
                                    <button className="py-3 px-8 text-base font-semibold leading-4 bg-yellow-500 rounded focus:outline-none hover:bg-indigo-600 text-white cursor-pointer">
                                        {user.status} User
                                    </button>
                                ) : (
                                    <button className="py-3 px-8 text-base font-semibold leading-4 bg-red-500 rounded focus:outline-none hover:bg-indigo-600 text-white cursor-pointer">
                                        {user.status} User
                                    </button>
                                )}
                            </div>
                            <div className="mt-7">
                                <p className="text-sm font-medium leading-3 text-gray-800 text-left ">
                                    Plan Uses
                                </p>
                                <div className="w-56 h-1 mt-2 bg-gray-200 rounded-full">
                                    <div className="w-36 h-1 bg-yellow-500 rounded-full" />
                                </div>
                            </div>

                            <div className="mt-7 flex justify-between">
                                <div className="border-r-2 px-4">
                                    <p className="text-2xl font-semibold tracking-wider leading-3 mb-3 text-gray-800 text-left ">
                                        {user.reviewed}
                                    </p>
                                    <p className="text-xs font-normal whitespace-nowrap leading-3 text-gray-600">
                                        Clicks reviewed
                                    </p>
                                </div>
                                <div className="px-4">
                                    <p className="text-2xl font-semibold tracking-wider leading-3 mb-3 text-gray-800 text-left ">
                                        {user.monthly_click}
                                    </p>
                                    <p className="text-xs font-normal whitespace-nowrap leading-3 text-gray-600 text-left ">
                                        Monthly clicks
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserCard;
