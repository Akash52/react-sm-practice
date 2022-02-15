import React, {FC} from 'react';
import {FaPlus} from 'react-icons/fa';
import {Todos} from '../../interface';
import {day, month, year, date} from './Date';

const Todo: FC = () => {
    const [todos, setTodos] = React.useState<Todos[]>([
        {
            id: 1,
            name: 'Buy new sweatshirt',
            complete: true,
        },
        {
            id: 2,
            name: 'Bring promotional phase',
            complete: true,
        },
        {
            id: 3,
            name: 'Read an artical',
            complete: false,
        },
        {
            id: 4,
            name: 'Try not to fall asleep',
            complete: false,
        },
        {
            id: 5,
            name: "Watch'Sherlock' ",
            complete: false,
        },
        {
            id: 6,
            name: 'Bring QA for the product',
            complete: false,
        },
        {
            id: 7,
            name: 'Go for a Walk',
            complete: false,
        },
    ]);
    const onToggle = (id: number) => {
        setTodos(
            todos.map((task) =>
                task.id === id ? {...task, complete: !task.complete} : task,
            ),
        );
    };

    return (
        <>
            <div className="mx-auto todo  container py-12 px-6 flex justify-center items-center">
                <div className="max-w-sm ">
                    <div className="w-full relative  descr bg-white rounded-lg shadow-lg mb-3 py-5 px-4">
                        <div className="mb-4 bg flex justify-between items-center p-2 ">
                            <div className="flex justify-center items-center">
                                <h2 className="text-gray-800 mr-2 -tracking-widest text-5xl font-medium mb-4">
                                    {date}
                                </h2>
                                <div className="-mt-3  text-sm -ml-[6px] p-1  text-gray-700">
                                    <h2 className="-mb-[4px] font-medium uppercase">
                                        {month}
                                    </h2>
                                    <h2 className="font-normal">{year}</h2>
                                </div>
                            </div>
                            <div className="-mt-3 text-sm -ml-2 p-1  text-gray-700">
                                <h2 className="-mb-1 font-medium uppercase">
                                    {day}
                                </h2>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center ">
                            {todos.map((todo, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center px-2 mx-auto mb-6">
                                        <h4
                                            className={`${
                                                todo.complete
                                                    ? 'text-gray-500 text-sm font-normal tracking-wide'
                                                    : 'text-gray-800 text-sm font-normal tracking-wide'
                                            } `}>
                                            {todo.name}
                                        </h4>
                                        <div>
                                            <input
                                                type="checkbox"
                                                className="form-checkbox w-3 ring-2 ring-gray-300 p-2 h-3 ml-3 cursor-pointer  text-green-500  rounded-full"
                                                checked={todo.complete}
                                                onChange={() =>
                                                    onToggle(todo.id)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button className="absolute -bottom-7 ml-3 translate-x-24 text-muted justify-center items-center btn_Add">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
