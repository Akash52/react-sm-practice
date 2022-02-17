import React, {FC, useState, useEffect} from 'react';
import {FaSearch} from 'react-icons/fa';

interface myProps {
    name: string;
    searchIP: (args: string) => void;
}

const Search: FC<myProps> = ({searchIP}: myProps) => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const inputRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        if (text.length > 8 && text !== '') {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [text]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        if (text === '') {
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false);
            searchIP(text);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return (
        <>
            <form autoComplete="off" onSubmit={onSubmit} className="search">
                <input
                    type="text"
                    className="input-search "
                    placeholder="Enter an IP address"
                    onChange={onChange}
                    ref={inputRef}
                />
            </form>
        </>
    );
};

export default Search;
