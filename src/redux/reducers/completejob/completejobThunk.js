import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const completejobApi = createApi({
  reducerPath: 'completejobApi',
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
  tagTypes: ['CompleteJob'],
  endpoints: (builder) => ({
    getAllCompleteJobsForUser: builder.query({
      query: (userId) => ({
        url: `/api/booking/getAllCompleteJobForUser/${userId}`,
        method: 'GET',
      }),
      providesTags: ['CompleteJob'],
      transformErrorResponse: (response) => response.data ?? 'An error occurred',
    }),
    createBooking: builder.mutation({
      query: (completejobData) => ({
        url: '/api/booking/create',
        method: 'POST',
        body: completejobData,
      }),
      invalidatesTags: ['CompleteJob'],
      transformErrorResponse: (response) => response.data ?? 'An error occurred while creating job',
    }),
  }),
});

export const {
  useGetAllCompleteJobsForUserQuery,
  useCreateBookingMutation,
} = completejobApi;

export const {
  reducer: completeJobReducer,
  middleware: completeJobMiddleware,
  endpoints: completeJobEndpoints,
} = completejobApi;
