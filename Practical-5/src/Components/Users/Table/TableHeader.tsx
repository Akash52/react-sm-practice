import React, {FC} from 'react';

const TableHeader: FC = () => {
    return (
        <>
            {/* Table Header */}
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-600  tracking-wider">
                        Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold  text-gray-600  tracking-wider">
                        Status
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-semibold  text-gray-600  tracking-wider">
                        Access
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-600  tracking-wider"></th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
        </>
    );
};

export default TableHeader;
