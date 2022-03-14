import React, {FC} from 'react';
import {FaPlus} from 'react-icons/fa';
import {Todos} from '../../interface';
import ModalForm from './ModalForm';
import TodoHeader from './TodoHeader';
import Todo from './Todo';
import Spinner from '../WebPackPR/Spinner';

type AddTodo = (text: string) => void;

const TodoList: FC = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [todos, setTodos] = React.useState<Todos[]>([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        fetchTodos();
    }, []);

    // Fetch todos from API
    const fetchTodos = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                'https://ts-bk-todo.herokuapp.com/api/v1/todo',
            );
            const data = await response.json();
            setTodos(data.todos);
        } catch (error) {
            console.log('error', error);
        }
        setLoading(false);
    };
    // Add todo to API
    const addTodo: AddTodo = async (todo) => {
        const res = await fetch(
            'https://ts-bk-todo.herokuapp.com/api/v1/todo',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({todo}),
            },
        );

        const data = await res.json();
        console.log(data.todo);

        setTodos([...todos, data.todo]);
    };
    // Delete todo from API
    const deleteTodo = async (_id: string) => {
        console.log(_id);
        if (window.confirm('Are you sure you want to delete this Todo?')) {
            await fetch(`https://ts-bk-todo.herokuapp.com/api/v1/todo/${_id}`, {
                method: 'DELETE',
            });
            setTodos(todos.filter((todo) => todo._id !== _id));
        }
    };

    const inputRef = React.useRef<HTMLInputElement>(null);
    const scrollToBottom = () => {
        if (inputRef.current !== null) {
            inputRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };
    //Auto scroll to bottom
    React.useEffect(scrollToBottom, [todos]);

    //escape key handler

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="mx-auto todo   flex justify-center items-center">
                <div className="relative ">
                    <div className="w-full mainBox bg-white rounded-lg shadow-lg mb-3 pb-4  px-4 overflow-y-auto">
                        <TodoHeader />
                        {todos?.map((todo) => (
                            <Todo
                                key={todo._id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                                deleteTodo={deleteTodo}
                            />
                        ))}
                        <div ref={inputRef} />

                        {showModal ? (
                            <>
                                <ModalForm
                                    setShowModal={setShowModal}
                                    handleAdd={addTodo}
                                />
                            </>
                        ) : null}
                    </div>
                    <button
                        className="absolute bottom-0 font-extralight translate-y-4   rounded-full translate-x-32 justify-center items-center py-5 px-5  btn_Add"
                        onClick={() => setShowModal(true)}>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </>
    );
};

export default TodoList;
