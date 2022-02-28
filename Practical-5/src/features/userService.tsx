import axios from 'axios';

//get users

const getUsers = () => {
    return axios.get('/api/users');
};

export default {getUsers};
