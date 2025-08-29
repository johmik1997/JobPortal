import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

// entity adapter for applications
const applicationsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.name.localeCompare(b.name) // sort by applicant name
})

const initialState = applicationsAdapter.getInitialState()

export const applicationsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // 📌 Applicant submits a job application
    applyJob: builder.mutation({
      query: (applicationData) => ({
        url: '/applications',
        method: 'POST',
        body: applicationData
      }),
      invalidatesTags: [{ type: 'Application', id: "LIST" }]
    }),

    // 📌 Get applications of a specific user (applicant)
    getUserApplications: builder.query({
      query: (userId) => `/applications/user/${userId}`,
      transformResponse: responseData => {
        const loadedApps = responseData.map(app => {
          app.id = app._id
          return app
        })
        return applicationsAdapter.setAll(initialState, loadedApps)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Application', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Application', id }))
          ]
        } else return [{ type: 'Application', id: 'LIST' }]
      }
    }),

    // 📌 Get applications for a specific job (employer view)
    getJobApplications: builder.query({
      query: (jobId) => `/applications/job/${jobId}`,
      transformResponse: responseData => {
        const loadedApps = responseData.map(app => {
          app.id = app._id
          return app
        })
        return applicationsAdapter.setAll(initialState, loadedApps)
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Application', id: 'LIST' },
            ...result.ids.map(id => ({ type: 'Application', id }))
          ]
        } else return [{ type: 'Application', id: 'LIST' }]
      }
    }),
getEmployerApplications: builder.query({
  query: (userId) => `/applications/employer/${userId}`,
  transformResponse: responseData => responseData,
  providesTags: result =>
    result?.length
      ? [
          { type: 'Application', id: 'LIST' },
          ...result.map(app => ({ type: 'Application', id: app.id })),
        ]
      : [{ type: 'Application', id: 'LIST' }],
}),
getApplicationDetails: builder.query({
  query: (appId) => `/applications/${appId}`,
  transformResponse: responseData => responseData,
  providesTags: result =>
    result?.length
      ? [
          { type: 'Application', id: 'LIST' },
          ...result.map(app => ({ type: 'Application', id: app.id })),
        ]
      : [{ type: 'Application', id: 'LIST' }],
}),

    // 📌 Update application status (employer/admin)
    updateApplicationStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/applications/${id}`,
        method: 'PATCH',
        body: { status }
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Application', id: arg.id }
      ]
    }),
  }),
})

export const {
  useApplyJobMutation,
  useGetUserApplicationsQuery,
  useGetJobApplicationsQuery,
  useGetApplicationDetailsQuery,
  useGetEmployerApplicationsQuery,
  useUpdateApplicationStatusMutation
} = applicationsApiSlice

// --- SELECTORS ---

// returns the query result object
export const selectApplicationsResult =
  applicationsApiSlice.endpoints.getUserApplications.select()

// creates memoized selector
const selectApplicationsData = createSelector(
  selectApplicationsResult,
  appsResult => appsResult.data // normalized state object with ids & entities
)

// getSelectors creates these selectors
export const {
  selectAll: selectAllApplications,
  selectById: selectApplicationById,
  selectIds: selectApplicationIds
} = applicationsAdapter.getSelectors(
  state => selectApplicationsData(state) ?? initialState
)
