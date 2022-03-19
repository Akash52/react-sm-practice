import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import userService from './userService';
import {IUsers} from './types';

//Our initial state
const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
} as IUsers;

interface ListResponse<T> {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: T[];
}

//get users

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    const users = await userService.getUsers();
    return await users;
});

//we done our pagination using custom hooks but we can also create pagination using redux-toolkit-query

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    endpoints: (build) => ({
        listPosts: build.query<ListResponse<IUsers>, number | void>({
            query: (page = 1) => `users?page=${page}`,
        }),
    }),
});

//create our slice

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reset: (state) => {
            state.users = [];
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
        },
        removeUser(state, action) {
            const id: number = action.payload;
            return {
                ...state,
                users: state.users.filter((user) => user.id !== id),
            };
        },
    },
    //extra reducers is a way to add extra reducers to our slice
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
            })
            .addCase(getUsers.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
            });
    },
});

//export our reducer
export const {reset, removeUser} = userSlice.actions;
export const {useListPostsQuery} = api;
export default userSlice.reducer;
