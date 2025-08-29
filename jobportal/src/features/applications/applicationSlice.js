import { apiSlice } from "../../app/api/apiSlice";

export const applicationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserApplications: builder.query({
      query: (userId) => `/applications/user/${userId}`,
      providesTags: ["Applications"],
    }),
  }),
});

export const { useGetUserApplicationsQuery } = applicationsApiSlice;
