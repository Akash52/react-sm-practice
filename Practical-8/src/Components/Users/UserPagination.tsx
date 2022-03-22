import React from 'react';
import {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {reset, getUsersPagination} from '../../Redux/features/Users/userSlice';
import {RootState} from '../../Redux/app/store';
import Spinner from '../WebPackPR/Spinner';
import TableHeader from './Table/TableHeader';
import UserItem from './UserItem';
import UserCard from './UserCard';
import {IUser} from '../../Redux/features/Users/types';
import Pagination from './Pagination';

const UserPagination: FC = () => {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);
    const [user, setUser] = React.useState<IUser | null>(null);

    //get users from the store
    const {users, isLoading, isSuccess} = useSelector(
        (state: RootState) => state.users,
    );

    //Use the dispatch function to dispatch our getUsersPagination, action
    React.useEffect(() => {
        dispatch(getUsersPagination(page));
    }, [dispatch, page]);

    //Use the dispatch function to dispatch our reset action
    React.useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset());
            }
        };
    }, [dispatch, isSuccess]);

    //handle the hover event
    const handleHover = (user: IUser | null) => {
        setUser(user);
    };

    //If we are loading, show the spinner
    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
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
                                                        handleHover={
                                                            handleHover
                                                        }
                                                    />
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/4 w-full mx-auto">
                        <div className="sticky top-10  xl:translate-y-20 md:-translate-x-14 md:-translate-y-2 mx-auto">
                            {/* If we have a user, show the user card */}
                            {user && <UserCard user={user} />}
                        </div>
                    </div>
                </div>
                <Pagination page={page} setPage={setPage} />
            </div>
        </>
    );
};

export default UserPagination;
