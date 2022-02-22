import React from 'react';
import {Todos} from '../../interface/index';

const Todo: React.FC<{
    todo: Todos;
    todos: Array<Todos>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todos>>>;
    deleteTodo: (id: string) => void;
}> = ({todo, todos, setTodos, deleteTodo}) => {
    //Basic toggle for completed or not
    const onToggle = (id: string) => {
        setTodos(
            todos.map((task) =>
                task._id === id ? {...task, completed: !task.completed} : task,
            ),
        );
    };

    return (
        <div
            className="flex justify-between items-center px-2 mx-auto mb-6"
            onDoubleClick={() => deleteTodo(todo._id)}>
            <h4
                className={`${
                    todo.completed
                        ? 'text-gray-500 text-sm font-normal cursor-pointer tracking-wide'
                        : 'text-gray-800 text-sm font-normal cursor-pointer tracking-wide'
                } `}>
                {todo.todo}
            </h4>
            <div>
                <input
                    type="checkbox"
                    className="form-checkbox w-3 ring-2 ring-gray-300 p-2 h-3 ml-3 cursor-pointer  text-green-500  rounded-full"
                    checked={todo.completed}
                    onChange={() => onToggle(todo._id)}
                />
            </div>
        </div>
    );
};

export default Todo;
