import React, {FC} from 'react';

interface Props {
    setSearchTitle(title: string): void;
}

const SearchBar: FC<Props> = ({setSearchTitle}) => {
    return (
        <>
            <input
                className="bg-gray-200 text-gray-800 focus:outline-none w-1/2  mx-auto focus:shadow-outline border border-transparent mt-5 rounded-lg py-2 px-4 block w-50 appearance-none leading-normal"
                type="text"
                placeholder="Search an user"
                onChange={(e) => setSearchTitle(e.target.value)}
            />
        </>
    );
};

export default SearchBar;
