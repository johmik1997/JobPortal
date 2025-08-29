// src/features/jobs/jobApiSlice.js
import { apiSlice } from "../../app/api/apiSlice";

export const jobFilterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFilteredJobs: builder.query({
      query: (filters) => {
        // Convert filters object into query string
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });

        return {
          url: `api/job?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Job"],
    }),
  }),
});

export const { useGetFilteredJobsQuery } = jobFilterApiSlice;
