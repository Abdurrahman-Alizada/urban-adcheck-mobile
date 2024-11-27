import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const progressJobApi = createApi({
  reducerPath: 'progressJobApi',
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
  tagTypes: ['ProgressJob'],
  endpoints: (builder) => ({
    getAllProgressJobsForUser: builder.query({
      query: (userId) => ({
        url: `/api/booking/getAllProgressJobsForUser/${userId}`,
        method: 'GET',
      }),
      providesTags: ['ProgressJob'],
      transformErrorResponse: (response) => response.data ?? 'An error occurred',
    }),
    updateProgressJob: builder.mutation({
      query: ({ jobId, progressData }) => ({
        url: `/api/booking/updateProgressJob/${jobId}`,
        method: 'PUT',
        body: progressData,
      }),
      invalidatesTags: ['ProgressJob'],
      transformErrorResponse: (response) =>
        response.data ?? 'An error occurred while updating the progress job',
    }),
  }),
});

export const {
  useGetAllProgressJobsForUserQuery,
  useUpdateProgressJobMutation,
} = progressJobApi;

export const {
  reducer: progressJobReducer,
  middleware: progressJobMiddleware,
  endpoints: progressJobEndpoints,
} = progressJobApi;
