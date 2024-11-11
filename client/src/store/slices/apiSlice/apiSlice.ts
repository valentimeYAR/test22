import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {App, CreateAppArgs, GetAppArgs} from "./types.ts";



export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        getApp: builder.query<App, GetAppArgs>({
            query: (params) => `/app/${params.id}`,
        }),

        createApp: builder.mutation<App, CreateAppArgs>({
            query: (params) => ({
                url: '/app',
                method: 'POST',
                body: params,
            }),
        }),
    }),
});

export const {useGetAppQuery, useCreateAppMutation, useLazyGetAppQuery} = apiSlice;
