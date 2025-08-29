import { createSlice } from '@reduxjs/toolkit'

const tokenFromStorage = localStorage.getItem('token')

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: tokenFromStorage || null },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.accessToken
      localStorage.setItem('token', action.payload.accessToken)
    },
    logOut: (state) => {
      state.token = null
      localStorage.removeItem('token')
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
