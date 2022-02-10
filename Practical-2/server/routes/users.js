import express from 'express';

import {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createUser,
} from '../controller/userController.js';

const router = express.Router();

let users = [];
//Get our all users

router.get('/', getUsers);

//Create our user

router.post('/', createUser);

//Get Single USER

router.get('/:id', getUser);

//Delete a single user

router.delete('/:id', deleteUser);

//Update a user

router.patch('/:id', updateUser);

export default router;
