import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import userService from './userService';

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
};

//get users

const getUsers = createAsyncThunk('user/getUsers', async () => {
    const users = await userService.getUsers();
    return users;
});

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

export const {reset} = userSlice.actions;
export default userSlice.reducer;
