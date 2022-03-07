import React, {FC} from 'react';

interface Props {
    prevPage: () => void;
    totalPages: number;
    nextPage: () => void;
    page: number;
    setPage: (num: number) => void;
}

const Pagination: FC<Props> = ({
    prevPage,
    totalPages,
    setPage,
    nextPage,
    page,
}) => {
    return (
        <>
            <ul className="flex items-center justify-center">
                <li>
                    <button
                        className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        onClick={prevPage}>
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
                    <button
                        className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() => {
                            setPage(totalPages);
                        }}>
                        {page}/{totalPages}
                    </button>
                </li>
                <li>
                    <button
                        className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        onClick={nextPage}>
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
        </>
    );
};

export default Pagination;
