import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../baseURL';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { jobApi } from './reducers/Job/jobApi'; // Replace with actual file name

export const jobApi = createApi({
  reducerPath: 'jobApi',
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
  tagTypes: ['Job'],
  endpoints: (builder) => ({
    // Fetch jobs by type (available, completed, hidden, in-progress)
    getJobsByType: builder.query({
      query: ({ userId, jobType }) => ({
        url: `/api/booking/getJobsByType/${jobType}/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Job'],
      transformResponse: (response) => response, // Optional transformation
      transformErrorResponse: (response) =>
        response.data ?? 'An error occurred while fetching jobs',
    }),

    // Create a new booking
    createJob: builder.mutation({
      query: (jobData) => ({
        url: '/api/booking/create',
        method: 'POST',
        body: jobData,
      }),
      invalidatesTags: ['Job'],
      transformErrorResponse: (response) =>
        response.data ?? 'An error occurred while creating the job',
    }),

    // Update job status (e.g., mark as completed)
    updateJobStatus: builder.mutation({
      query: ({ jobId, status }) => ({
        url: `/api/booking/update/${jobId}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Job'],
      transformErrorResponse: (response) =>
        response.data ?? 'An error occurred while updating the job',
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetJobsByTypeQuery,
  useCreateJobMutation,
  useUpdateJobStatusMutation,
} = jobApi;
