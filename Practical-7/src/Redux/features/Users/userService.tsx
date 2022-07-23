//get users

const getUsers = async () => {
    const response = await fetch(
        'https://raw.githubusercontent.com/Akash52/mock-json-data/main/users.json',
    );
    const data = await response.json();
    return data;
};

//user pagination

const getUsersPagination = async (page: number) => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await response.json();
    return data.data;
};

export default {getUsers, getUsersPagination};
