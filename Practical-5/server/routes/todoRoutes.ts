import {Router} from 'express';
const router = Router();
import {
    getTodos,
    createTodo,
    updateTodos,
    deleteTodo,
} from '../controller/todoController';

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').put(updateTodos).delete(deleteTodo);

export default router;
