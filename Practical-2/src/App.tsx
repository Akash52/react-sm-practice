import React from 'react';
import {FC, useEffect, useState} from 'react';

const App: FC = () => {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        const url =
            'https://raw.githubusercontent.com/Akash52/awesome-Javascript-collection/master/data.json';
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.profiles);
                setAdvice(json.name);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app">
            <h1>Hello World</h1>
            <p>{advice}</p>
            <p>Hello World!</p>
        </div>
    );
};

export default App;
