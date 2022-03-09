import React, {useCallback} from 'react';
import {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers, reset} from '../../Redux/features/Users/userSlice';
import {RootState} from '../../Redux/app/store';
import Spinner from '../Pr2_cmp/Spinner';
import TableHeader from './Table/TableHeader';
import UserItem from './UserItem';
import UserCard from './UserCard';
// import usePagination from '../../hook/usePagination';
// import Pagination from './Pagination';
import SearchBar from './SearchBar';
import {useListPostsQuery} from '../../Redux/features/userPagination/userAPI';

const UsersList: FC = () => {
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    const [user, setUser] = React.useState(null);
    const [searchTitle, setSearchTitle] = React.useState('');
    const {data: data, isLoading} = useListPostsQuery(page);

    console.log('data', data);

    //get users from the store
    // const {users, isLoading, isSuccess} = useSelector(
    //     (state: RootState) => state.users,
    // );

    //Use the dispatch function to dispatch our getUsers action
    // React.useEffect(() => {
    //     dispatch(getUsers());
    // }, [dispatch]);

    //usePageination hook to paginate the users

    // const {
    //     firstContentIndex,
    //     lastContentIndex,
    //     nextPage,
    //     prevPage,
    //     page,
    //     setPage,
    //     totalPages,
    // } = usePagination({
    //     contentPerPage: 6,
    //     count: users.length,
    // });

    //Use the dispatch function to dispatch our reset action
    // React.useEffect(() => {
    //     return () => {
    //         if (isSuccess) {
    //             dispatch(reset());
    //         }
    //     };
    // }, [dispatch, isSuccess]);

    //memorize the handleHover function

    const handleHover = useCallback(
        (user) => {
            setUser(user);
        },
        [setUser],
    );

    //If we are loading, show the spinner
    if (isLoading) {
        return <Spinner />;
    }

    //filter the users based on the searchTitle

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
                                                {data?.data.map((person) => (
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
                                    {/* <Pagination
                                        nextPage={nextPage}
                                        prevPage={prevPage}
                                        page={page}
                                        setPage={setPage}
                                        totalPages={totalPages}
                                    /> */}
                                    <ul className="flex items-center justify-center">
                                        <li>
                                            <button
                                                className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                                                onClick={() =>
                                                    setPage(
                                                        page > 1
                                                            ? page - 1
                                                            : page,
                                                    )
                                                }>
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                                                {' '}
                                                {page}
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                                onClick={() =>
                                                    setPage(
                                                        page < 2
                                                            ? page + 1
                                                            : page,
                                                    )
                                                }>
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
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
