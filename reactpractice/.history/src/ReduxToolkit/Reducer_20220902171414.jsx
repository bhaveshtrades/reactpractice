import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bhavesh: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.bhavesh += 1
    },
    decrement: (state) => {
      if(state.value !== 0){
        state.bhavesh -= 1
      }else{
        state.bhavesh = 0
      }
    },
    incrementByAmount: (state, action) => {
      state.bhavesh += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer