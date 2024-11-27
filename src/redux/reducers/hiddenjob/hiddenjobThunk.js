import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const hiddenJobApi = createApi({
  reducerPath: 'hiddenJobApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: async (headers) => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
      } catch (error) {
        console.error('Error accessing token:', error);
      }
      return headers;
    },
  }),
  tagTypes: ['HiddenJob'],
  endpoints: (builder) => ({
    getAllHiddenJobsForUser: builder.query({
      query: (userId) => ({
        url: `/api/booking/getAllHiddenJobsForUser/${userId}`,
        method: 'GET',
      }),
      providesTags: ['HiddenJob'],
      transformErrorResponse: (response) => response.data ?? 'An error occurred',
    }),
    hideJob: builder.mutation({
      query: (jobId) => ({
        url: `/api/booking/hideJob/${jobId}`,
        method: 'POST',
      }),
      invalidatesTags: ['HiddenJob'],
      transformErrorResponse: (response) => response.data ?? 'An error occurred while hiding the job',
    }),
  }),
});

export const {
  useGetAllHiddenJobsForUserQuery,
  useHideJobMutation,
} = hiddenJobApi;

export const {
  reducer: hiddenJobReducer,
  middleware: hiddenJobMiddleware,
  endpoints: hiddenJobEndpoints,
} = hiddenJobApi;
