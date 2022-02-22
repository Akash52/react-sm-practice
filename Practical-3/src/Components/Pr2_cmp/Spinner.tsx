import React, {FC} from 'react';

const Spinner: FC = () => {
    return (
        <>
            <div className="block w-15 h-15 m-auto border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"></div>
        </>
    );
};

export default Spinner;
