import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../features/auth/authSlice'

const rawBaseQuery = fetchBaseQuery({
  baseUrl: 'https://jobportalbackend-7krd.onrender.com',
  credentials: 'include', // 👈 ensures refresh cookie (jwt) is sent
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState().auth.token

    // 🚨 Don’t add Authorization header for refresh endpoint
    if (token && endpoint !== 'refresh') {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions)

  // If access token expired
  if (result?.error?.status === 403) {
    console.log('Access token expired, trying refresh...')

    // 🔑 Call refresh WITHOUT Authorization header
    const refreshResult = await rawBaseQuery(
      { url: '/auth/refresh', method: 'GET' },
      { ...api, endpoint: 'refresh' }, // 👈 force endpoint = refresh
      extraOptions
    )

    if (refreshResult?.data) {
      // ✅ Save new access token in state
      api.dispatch(setCredentials({ ...refreshResult.data }))

      // 🔄 Retry original query with new token
      result = await rawBaseQuery(args, api, extraOptions)
    } else {
      if (refreshResult?.error?.status === 403) {
        refreshResult.error.data.message = 'Your login has expired.'
      }
      return refreshResult
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User', 'Job'],
  endpoints: () => ({}),
})

