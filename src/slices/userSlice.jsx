import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  id: null,
  phoneNumber: null,
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.phoneNumber = action.payload.phoneNumber
    },
    removeUser(state) {
      state.email = null
      state.id = null
      state.phoneNumber = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducers
