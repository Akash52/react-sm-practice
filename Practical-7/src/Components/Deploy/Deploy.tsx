import React, {FC} from 'react';

const deploy = [
    {
        title: 'Microsoft Azure',
        link: 'https://react-demo-azurv1.azurewebsites.net/',
    },
    {
        title: 'Firebase',
        link: 'https://react-firebase-host.web.app/',
    },
    {
        title: 'Netlify',
        link: 'https://react-app-deploy.netlify.app/',
    },
    {
        title: 'Heroku',
        link: 'https://react-heroku-deploy-one.herokuapp.com/',
    },
    {
        title: 'Vercel',
        link: 'https://react-app-deploy-five.vercel.app/',
    },
];

const Deploy: FC = () => {
    return (
        <div>
            <div className="container flex flex-col align-middle mx-auto justify-center">
                <div className="  bg-slate-900 p-12 m-12 cursor-pointer duration-500  rounded-lg shadow-2xl justify-center hover:bg-gray-900">
                    <h1 className=" font-semibold text-4xl text-white mb-5 text-center">
                        Deploy
                    </h1>
                    {deploy.map((item, index) => (
                        <div key={index}>
                            <div className=" flex justify-between border-b-2">
                                <h1 className="font-black text-xl  sm:text-center text-gray-100 mb-4  lg:text-left">
                                    {item.title}
                                </h1>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-normal text-xl mt-2 text-gray-200 hover:text-orange-400">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Deploy;
