import React from 'react';
import {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers, reset} from '../../features/Users/userSlice';
import {RootState} from '../../app/store';
import Spinner from '../Pr2_cmp/Spinner';
import TableHeader from './Table/TableHeader';
import UserItem from './UserItem';

const UsersList: FC = () => {
    const dispatch = useDispatch();
    const {users, isLoading, isError, isSuccess} = useSelector(
        (state: RootState) => state.users,
    );

    //Use the dispatch function to dispatch our getUsers action
    React.useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    //Use the dispatch function to dispatch our reset action
    React.useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        };
    }, [dispatch, isSuccess]);
    //If we are loading, show the spinner
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="md:w-4/5 w-full pb-6 md:pb-0 md:pr-6">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden  sm:rounded-lg">
                                <table className="min-w-full ">
                                    {/* Table Header */}
                                    <TableHeader />
                                    <tbody className="bg-white">
                                        {/* Maping users to table rows */}
                                        {users.map((person) => (
                                            <UserItem
                                                key={person.id}
                                                person={person}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsersList;
