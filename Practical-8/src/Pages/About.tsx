import React, {FC} from 'react';

const About: FC = () => {
    return (
        <div className="container flex flex-col align-middle mx-auto justify-center">
            <div className="  bg-gradient-to-r from-slate-700 to-slate-800  p-12 m-12 cursor-pointer duration-500  rounded-lg shadow-2xl justify-center hover:bg-gray-900">
                <p className=" font-semibold text-sm  md:text-xl text-white mb-5 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate quia beatae ducimus obcaecati aut. Impedit
                    accusamus, sit doloremque numquam, omnis amet, odio libero
                    similique adipisci nihil ad quos excepturi mollitia.
                    <span className="lg:text-4xl animate-pulse">😄</span>
                </p>
            </div>
        </div>
    );
};

export default About;
