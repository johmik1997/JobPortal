import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const jobsAdapter = createEntityAdapter({
    sortComparer: (a, b) => a.title.localeCompare(b.title) // sort by job title
})

const initialState = jobsAdapter.getInitialState()

export const jobsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getJobs: builder.query({
            query: () => ({
                url: '/jobs',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: responseData => {
                const loadedJobs = responseData.map(job => {
                    job.id = job._id
                    return job
                })
                return jobsAdapter.setAll(initialState, loadedJobs)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Job', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Job', id }))
                    ]
                } else return [{ type: 'Job', id: 'LIST' }]
            }
        }),
      getEmployerJobs: builder.query({
  query: (userId) => `/jobs/${userId}`,  // pass userId here
  transformResponse: (responseData) => {
    const loadedJobs = responseData.map(job => {
      job.id = job._id;
      return job;
    });
    return jobsAdapter.setAll(initialState, loadedJobs);
  },
  providesTags: (result) =>
    result?.ids
      ? [
          { type: 'Job', id: 'LIST' },
          ...result.ids.map(id => ({ type: 'Job', id })),
        ]
      : [{ type: 'Job', id: 'LIST' }],
}),

        addNewJob: builder.mutation({
            query: initialJob => ({
                url: '/jobs',
                method: 'POST',
                body: {
                    ...initialJob,
                }
            }),
            invalidatesTags: [{ type: 'Job', id: "LIST" }]
        }),
      updateJob: builder.mutation({
    query: ({ id, ...jobData }) => ({
        url: `/jobs/${id}`,   // ✅ put id in the URL
        method: 'PATCH',
        body: jobData,        // ✅ only send fields to update
    }),
    invalidatesTags: (result, error, arg) => [
        { type: 'Job', id: arg.id }
    ]
}),
deleteJob: builder.mutation({
    query: (id) => ({
        url: `/jobs/${id}`,   // ✅ put id in the URL
        method: 'DELETE',
    }),
    invalidatesTags: (result, error, arg) => [
        { type: 'Job', id: arg }
    ]
}),

    }),
})

export const {
    useGetJobsQuery,
    useAddNewJobMutation,
    useGetEmployerJobsQuery,
    useUpdateJobMutation,
    useDeleteJobMutation,
} = jobsApiSlice

// returns the query result object
export const selectJobsResult = jobsApiSlice.endpoints.getJobs.select()

// creates memoized selector
const selectJobsData = createSelector(
    selectJobsResult,
    jobsResult => jobsResult.data // normalized state object with ids & entities
)

// getSelectors creates these selectors
export const {
    selectAll: selectAllJobs,
    selectById: selectJobById,
    selectIds: selectJobIds
} = jobsAdapter.getSelectors(state => selectJobsData(state) ?? initialState)
