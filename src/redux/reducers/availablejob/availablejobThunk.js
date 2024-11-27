import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const availableJobApi = createApi({
  reducerPath: 'availableJobApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: async (headers, { getState }) => {
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
  tagTypes: ['AvailableJob'],
  endpoints: (builder) => ({
    getAllAvailableJobsForUser: builder.query({
      query: (userId) => ({
       url: `/api/booking/getAllAvailableJobForUser/${userId}`,
        method: 'GET'
      }),
      providesTags: ['AvailableJob'],
      transformResponse: (response) => {
        // Add any response transformation if needed
        return response;
      },
      // Add error handling
      transformErrorResponse: (response) => {
        return response.data ?? 'An error occurred';
      }
    }),
    createBooking: builder.mutation({
      query: (availableJobData) => ({
        url: '/api/booking/create',
        method: 'POST',
        body: availableJobData,
      }),
      invalidatesTags: ['AvailableJob'],
      // Add error handling
      transformErrorResponse: (response) => {
        return response.data ?? 'An error occurred while creating booking';
      }
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetAllAvailableJobsForUserQuery,
  useCreateAvailableJobMutation
} = availableJobApi;

// Export the reducer and middleware for store configuration
export const {
  reducer: availableJobReducer,
  middleware: availableJobMiddleware,
  endpoints: availableJobEndpoints
} = availableJobApi;