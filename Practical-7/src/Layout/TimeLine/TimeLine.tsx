import React, {FC} from 'react';

const PracticalData = [
    {
        id: 1,
        title: 'Practical 1',
        link: 'https://react-practical-1.netlify.app/',
        des: 'In thse App we explore React basics concepts : ComponentsJSX Props ',
        repo_link:
            'https://github.com/Akash52/react-sm-practice/tree/practical-1',
    },
    {
        id: 2,
        title: 'Practical 2',
        link: 'https://react-pr2-akash.netlify.app/',
        des: 'In these Practical we setup React & TypeScript Boilerplate from scratch & we explore Webpack , Babel & Defferent Babel Loader. ',
        repo_link:
            'https://github.com/Akash52/react-sm-practice/tree/Practical-2',
    },
    {
        id: 3,
        title: 'Practical 3',
        link: 'https://react-ts-pr3.netlify.app/',
        des: 'In these Practical,  we created a fully functional Todo App with React & TypeScript. also we included the backend with NodeJS, ExpressJS & MongoDB. ',
        repo_link:
            'https://github.com/Akash52/react-sm-practice/tree/Practical-3',
    },
    {
        id: 4,
        title: 'Practical 4',
        link: 'https://react-sm-p4.netlify.app/',
        des: 'In these Practical, we created TODO UI using TailwndCSS and React Hooks',
        repo_link:
            'https://github.com/Akash52/react-sm-practice/tree/Practical-4',
    },
    {
        id: 5,
        title: 'Practical 5',
        link: 'https://react-pr-5-akash.netlify.app/',
        des: ' These Practical has also beatuiful UI Employeelist , In this Practical main challenge was to change data in a Particular Card when the user hover list ',
        repo_link:
            'https://github.com/Akash52/react-sm-practice/tree/Practical-5',
    },
    {
        id: 6,
        title: 'Practical 6',
        link: 'https://react-sm-pr6.netlify.app/',
        des: 'In these Practical , we learn how to implement pagination using client-side & Server-Side',
        repo_link:
            'https://github.com/Akash52/react-sm-practice/tree/Practical-6',
    },
    {
        id: 7,
        title: 'Practical 7',
        link: 'https://react-sm-pr7.netlify.app/',
        des: 'This Practical is all about deployment, we deploy our project on Netlify, Firebase, Microsoft Azure & Vercel',
        repo_link:
            'https://github.com/Akash52/react-sm-practice/tree/Practical-7',
    },
];

interface PracticalData {
    id: number;
    title: string;
    link: string;
    des: string;
    repo_link: string;
}

const TimeLine: FC = () => {
    const [data] = React.useState<PracticalData[]>(PracticalData);

    return (
        <>
            <div className="container mx-auto border-2 border-emerald-200 bg-slate-200 mt-2 rounded-3xl mb-2 shadow-lg max-w-7xl sm:px-6 lg:px-8 h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                        className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                        style={{left: '50%'}}></div>
                    {/* <!-- right timeline --> */}
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.id % 2 === 0 ? (
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="z-20 flex items-center ring-4 ring-blue-200  order-1 bg-green-600 hover:bg-red-400 shadow-2xl hover:shadow-sm w-8 h-8 rounded-full cursor-pointer">
                                            <h1 className="mx-auto font-semibold text-lg text-white">
                                                {item.id}
                                            </h1>
                                        </div>
                                        <div className="order-1 border-r-4 border-blue-400 relative bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg shadow-xl w-5/12 px-6 py-4  cursor-pointer">
                                            <h3 className="mb-3 whitespace-nowrap font-bold text-gray-200 text-xl">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm leading-snug tracking-wide text-gray-100 text-opacity-100  mb-8">
                                                {item.des}
                                            </p>
                                            <div className="flex absolute bottom-0 left-0 right-0 items-center justify-center  mx-auto  translate-y-5">
                                                <div className="text-white bg-gradient-to-r from-pink-800 to-slate-900 font-semibold p-2 rounded-xl  text-lg m-1 transition duration-500 transform hover:scale-110">
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                            />
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="text-white bg-gradient-to-r from-blue-800 to-slate-900 font-semibold p-2 rounded-xl  text-lg m-1 transition duration-500 transform hover:scale-110">
                                                    <a
                                                        href={item.repo_link}
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="z-20 flex items-center ring-4 ring-blue-200  order-1 bg-green-600 hover:bg-red-400 shadow-2xl hover:shadow-sm w-8 h-8 rounded-full cursor-pointer">
                                            <h1 className="mx-auto text-white font-semibold text-lg">
                                                {item.id}
                                            </h1>
                                        </div>
                                        <div className="order-1 relative  border-l-4 border-indigo-400 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-lg shadow-xl w-5/12 px-6 py-4  cursor-pointer">
                                            <h3 className="mb-3 whitespace-nowrap font-bold text-white text-xl">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm will-change-contents leading-snug tracking-wide text-white text-opacity-100 mb-8">
                                                {item.des}
                                            </p>
                                            <div className="flex absolute bottom-0 left-0 right-0 items-center justify-center  mx-auto  translate-y-5">
                                                <div className="text-white bg-gradient-to-r from-pink-800 to-slate-900 font-semibold p-2 rounded-xl  text-lg m-1 transition duration-500 transform hover:scale-110">
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                            />
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="text-white bg-gradient-to-r from-blue-800 to-slate-900 font-semibold p-2 rounded-xl  text-lg m-1 transition duration-500 transform hover:scale-110">
                                                    <a
                                                        href={item.repo_link}
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            strokeWidth="2">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default TimeLine;
