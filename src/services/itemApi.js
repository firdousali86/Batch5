import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {DataHelper} from '../helpers';

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
  }),
  tagTypes: ['Items'],
  endpoints: builder => ({
    getAllItems: builder.query({
      query: () => 'items',
      providesTags: ['Items'],
    }),
    postItem: builder.mutation({
      query: newItem => ({
        url: 'items',
        method: 'POST',
        body: newItem,
        headers: {
          'X-Access-Token': DataHelper.getAccessToken(),
        },
      }),
      invalidatesTags: ['Items'],
    }),
  }),
});

export const {useGetAllItemsQuery, usePostItemMutation} = itemApi;
