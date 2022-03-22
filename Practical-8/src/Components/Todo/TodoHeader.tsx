import React, {FC} from 'react';
import {day, month, year, date} from './Date';

//These component reprsent the header of the todo list

const TodoHeader: FC = () => {
    return (
        <>
            <div className="mb-4 bg-white pt-8 rounded-md flex justify-between items-center  px-5 sticky top-0">
                <div className="flex justify-center items-center">
                    <h2 className="text-gray-800 mr-2 -tracking-widest text-5xl font-medium mb-4">
                        {date}
                    </h2>
                    <div className="-mt-3  text-sm -ml-[6px] p-1  text-gray-700">
                        <h2 className="-mb-[4px] font-medium uppercase">
                            {month}
                        </h2>
                        <h2 className="font-normal">{year}</h2>
                    </div>
                </div>
                <div className="-mt-3 text-sm -ml-2 p-1  text-gray-700">
                    <h2 className="-mb-1 font-medium uppercase">{day}</h2>
                </div>
            </div>
        </>
    );
};

export default TodoHeader;
