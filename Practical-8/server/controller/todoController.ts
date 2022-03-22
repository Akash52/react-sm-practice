import asyncHandler from 'express-async-handler';
import Todo from '../models/todoModel';

// @des Get all Todos
// @route GET/api/v1/todos
// @access Public
export const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json({
        todos,
    });
});

// @des Create new Todo
// @route POST/api/v1/todos
// @access Public
export const createTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(201).json({todo});
});

// @des Update bootcamp
// @route PUT/api/v1/todos/:id
// @access Private
export const updateTodos = asyncHandler(async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!todo) {
    }
    res.status(200).json({
        todo,
    });
});

// @des Delete todo
// @route DELETE/api/v1/todos:/id
// @access Public
export const deleteTodo = asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        res.status(404);
        throw new Error('Todo Not Found');
    }
    await todo.remove();
    res.status(200).json({
        success: true,
        data: {},
    });
});
