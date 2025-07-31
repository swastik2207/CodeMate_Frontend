import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  problemId: '', // to store the problem ID  
  problemcode: '',
  language: 'cpp', // default language
  status: 'Unsolved',
  description:'' // default status
};

const problemSlice = createSlice({
  name: 'problem',
  initialState,
  reducers: {
    setProblemId: (state, action) => {
      state.problemId = action.payload; // directly set problemId
    },
    setProblemCode: (state, action) => {
      state.problemcode = action.payload;
    },
    setStatus: (state, action) => {
       if( action.payload === 'Solved') 
        state.status = action.payload; // ensure status is either 'Solved' or 'Unsolved'
     // state.status = action.payload; // directly set status
    },
    setProblemDescription: (state, action) => {
      state.description = action.payload; // directly set description
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setStatus, setProblemCode, setLanguage ,setProblemId ,setProblemDescription } = problemSlice.actions;
export default problemSlice.reducer;
