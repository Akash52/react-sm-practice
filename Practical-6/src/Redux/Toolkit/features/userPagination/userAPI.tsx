import {EndpointBuilder} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    endpoints: (
        builder: EndpointBuilder<
            BaseQueryFn<
                string | FetchArgs,
                unknown,
                FetchBaseQueryError,
                // eslint-disable-next-line @typescript-eslint/ban-types
                {},
                FetchBaseQueryMeta
            >,
            never,
            'user'
        >,
    ) => ({
        listPosts: builder.query({
            query: (page = 1) => `users?page=${page}`,
        }),
    }),
});

export const {useListPostsQuery} = userApi;
