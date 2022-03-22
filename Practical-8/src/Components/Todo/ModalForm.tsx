import React, {FC} from 'react';
import {date} from './Date';

interface props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    handleAdd: AddTodo;
}
type AddTodo = (text: string) => void;

const MAX_LENGTH = 30;

const ModalForm: FC<props> = ({setShowModal, handleAdd}) => {
    const key = makeNewPostKey(date);
    const [text, setText] = React.useState(getLocalStoragevalue(key) || '');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const textLengthRef = React.useRef(0);

    // handleTextChange is called when the text input changes
    const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
        textLengthRef.current = e.currentTarget.value.length;
    };

    //handleSubmit is called when the submit button is clicked
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (textLengthRef.current > MAX_LENGTH) {
            alert('Todo is too long');
        } else if (text.trim().length > 0) {
            handleAdd(text);
            setText('');
            setShowModal(false);
            removeLocalStorage();
        }
    };
    //Remove Item from Local Storage
    const removeLocalStorage = () => {
        localStorage.removeItem(key);
    };
    //Set Item in Local Storage
    React.useEffect(() => {
        setLocalStoragevalue(key, text);
    }, [key, text]);

    //For Focusing our form input we use useRef
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    //esc key
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setShowModal(false);
            removeLocalStorage();
        }
    };

    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <div>
                                    <label
                                        htmlFor="todo"
                                        className="block mb-2 text-lg font-medium text-gray-900 ">
                                        Add new task
                                    </label>
                                    <input
                                        type="text"
                                        ref={inputRef}
                                        value={text}
                                        name="todo"
                                        id="todo"
                                        placeholder="eg. Buy new sweatshirt"
                                        className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                                        required
                                        onKeyDown={handleKeyDown}
                                        onChange={handleTextChange}
                                    />
                                    <p
                                        className={`${
                                            textLengthRef.current > MAX_LENGTH
                                                ? 'text-red-600 text-right  mt-2 text-xs animate-pulse font-extrabold'
                                                : 'text-green-600 text-xs text-right mt-2 font-semibold tracking-wide'
                                        } `}>
                                        {textLengthRef.current}/{MAX_LENGTH}
                                    </p>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </form>
        </>
    );
};

//makeNewPostKey function is used to create a unique key for the local storage

function makeNewPostKey(date: number) {
    return `${date}-todo`;
}
//getLocalStoragevalue function is used to get the value of the local storage

function getLocalStoragevalue(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return [];
}
//setLocalStoragevalue function is used to set the value of the local storage

function setLocalStoragevalue(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
}

export default ModalForm;
