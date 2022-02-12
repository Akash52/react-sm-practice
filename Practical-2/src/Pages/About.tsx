import React, {FC} from 'react';

const About: FC = () => {
    return (
        <div className="container">
            <h1>About</h1>
            <h3 className="about">
                <strong>In </strong> these project we implemented major React
                concept like React Components, <strong> Hooks </strong> , State
                Management , Prop Passing , React Router , React-icons for
                create our UI , we handle <strong>404</strong> error using
                NotFound page & also we called 2 API 1st one is{' '}
                <strong>IP Info </strong> Provide current device IP information
                like region , city , country etc. & 2nd one is a simply provide{' '}
                <strong> Harry Potter </strong> cast details .
            </h3>
        </div>
    );
};

export default About;
