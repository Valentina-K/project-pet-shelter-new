/* import { createSlice } from '@reduxjs/toolkit';
import { getAllAttributes, createNewAttribute, getAttributeById } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || 'An error occurred';
};

const attributeSlice = createSlice({
  name: 'attributes',
  initialState: {
    breed: '',
    age: '',
    size: '',
    gender: '',
    coat_length: '',
    color: '',
    health_condition: '',
    pet_name: ''
  },
  extraReducers: (builder)=>{
    builder
    .addCase(getAllAttributes.pending,handlePending)
    .addCase(getAllAttributes.fulfilled,(state, action)=>{
      state.isLoading = false;

    })
    .addCase(getAllAttributes.rejected, handleReject)
  }
})

export default attributeSlice.reducer;

 */
