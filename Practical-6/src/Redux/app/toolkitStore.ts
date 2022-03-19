import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {userApi} from '../Toolkit/features/userPagination/userAPI';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
