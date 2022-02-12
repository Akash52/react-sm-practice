import React, {FC} from 'react';
import {FaSearch} from 'react-icons/fa';

const Search: FC = () => {
    return (
        <>
            <div className="search">
                <input
                    type="text"
                    className="input-search "
                    placeholder="Enter an IP address"
                />
                <button type="submit" className="search-btn">
                    <FaSearch />
                </button>
            </div>
        </>
    );
};

export default Search;
