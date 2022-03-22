import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userService from './userService';
import {IUsers} from './types';

//Our initial state
const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
} as IUsers;

//get users

export const getUsers = createAsyncThunk('user/getUsers', async () => {
    const users = await userService.getUsers();
    return await users;
});

//user pagination

export const getUsersPagination = createAsyncThunk(
    'user/getUsersPagination',
    async (page: number) => {
        const users = await userService.getUsersPagination(page);
        return await users;
    },
);

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
            })
            .addCase(getUsersPagination.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
            })
            .addCase(getUsersPagination.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
            })
            .addCase(getUsersPagination.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
            });
    },
});

//export our reducer
export const {reset} = userSlice.actions;
export default userSlice.reducer;
