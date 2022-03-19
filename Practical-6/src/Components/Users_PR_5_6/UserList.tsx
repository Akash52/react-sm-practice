import React, {useCallback} from 'react';
import {FC, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Spinner from '../Webpack_PR2/Spinner';
import TableHeader from './Table/TableHeader';
import UserItem from './UserItem';
import UserCard from './UserCard';
import SearchBar from './SearchBar';
import PaginationComp from './PaginationComp';
import {userListAction} from '../../Redux/Normal Redux/Action/userAction';
import {useParams} from 'react-router-dom';

const UsersList: FC = () => {
    const [user, setUser] = React.useState(null);
    const [searchTitle, setSearchTitle] = React.useState('');
    const {pageNumber = 1} = useParams();
    const [page, setPage] = React.useState(pageNumber);
    const userList = useSelector((state) => state.userList);
    const {loading, error, users} = userList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userListAction(page));
    }, [dispatch, page]);
    //memorize the handleHover function

    const handleHover = (user: any) => {
        setUser(user);
    };

    //If we are loading, show the spinner
    if (loading) {
        return <Spinner />;
    }

    // const filteredUsers = users.filter((user) => {
    //     return user.first_name
    //         .toLowerCase()
    //         .includes(searchTitle.toLowerCase());
    // });

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-3/4 w-full pb-6 md:pb-0 md:pr-6">
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-hidden  sm:rounded-lg">
                                        {/* Search Component */}
                                        <SearchBar
                                            setSearchTitle={setSearchTitle}
                                        />
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
                                    <PaginationComp
                                        page={page}
                                        setPage={setPage}
                                    />
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
            </div>
        </>
    );
};

export default UsersList;
