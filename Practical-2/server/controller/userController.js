import express from 'express';
import {v4 as uuid4} from 'uuid';

let users = [];

//Get all users
export const getUsers = (req, res) => {
    res.send(users);
    console.log(users);
};

//Create user

export const createUser = (req, res) => {
    //console.log(req.body)
    const user = req.body;
    users.push({...user, id: uuid4()});
    //console.log(user.lastName)
    res.send('User updated succesfully');
};

//Get single user

export const getUser = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

// Delete User

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);

    res.send('User deleted succesfully');
};

//   Update User

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);

    user.name = req.body.name;
    user.std = req.body.std;

    res.send('User updated succesfully');
};
