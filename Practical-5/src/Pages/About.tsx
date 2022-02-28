import React, {FC} from 'react';

const about = [
    {
        title: 'Practical 2',
        link: 'https://react-pr2-akash.netlify.app/',
        des: 'In thse App we explore React basics concepts : ComponentsJSX Props (proptypes, defaultprops, etc) State (Component & App Level) Styling Handling Events Lists & Keys Forms Context API HTTP Requests',
    },
    {
        title: 'Practical 4',
        link: 'https://react-pr2-akash.netlify.app/',
        des: 'In thse App we explore React basics concepts : ComponentsJSX Props (proptypes, defaultprops, etc) State (Component & App Level) Styling Handling Events Lists & Keys Forms Context API HTTP Requests',
    },
    {
        title: 'Practical 3',
        link: 'https://react-pr2-akash.netlify.app/',
        des: 'In thse App we explore React basics concepts : ComponentsJSX Props (proptypes, defaultprops, etc) State (Component & App Level) Styling Handling Events Lists & Keys Forms Context API HTTP Requests',
    },
];

const About: FC = () => {
    const [aboutData, setAboutData] = React.useState(about);
    return (
        <div className="container flex flex-col align-middle mx-auto justify-center">
            <div className="  bg-slate-800 p-12 m-12 cursor-pointer duration-500  rounded-lg shadow-2xl justify-center hover:bg-gray-900">
                <h1 className=" font-semibold text-4xl text-white mb-5 text-center">
                    About
                </h1>
                {aboutData.slice(0, 1).map((item, index) => (
                    <div key={index}>
                        <div className=" flex justify-between border-b-2">
                            <h1 className="font-black text-3xl  sm:text-center text-gray-100  lg:text-left">
                                {item.title}
                            </h1>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="font-normal text-xl text-gray-200">
                                Live Demo
                            </a>
                        </div>
                        <h3 className="about ml-4 text-xl mb-6 mt-3 sm:text-center  text-slate-200 first-letter:text-2xl">
                            {item.des}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
