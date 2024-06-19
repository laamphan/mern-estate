import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload
    },
    signInFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    updateUserStart: (state) => {
      state.loading = true
    },
    updateUserSuccess: (state, action) => {
      state.loading = false
      state.currentUser = action.payload
      state.error = null
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    deleteUserStart: (state) => {
      state.loading = true
    },
    deleteUserSuccess: (state) => {
      state.loading = false
      state.currentUser = null
      state.error = null
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    signOutStart: (state) => {
      state.loading = true
    },
    signOutSuccess: (state) => {
      state.loading = false
      state.currentUser = null
      state.error = null
    },
    signOutFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutStart,
  signOutSuccess,
  signOutFailure,
} = userSlice.actions

export default userSlice.reducer
