import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code: '',
  language: 'cpp', // default language
};

const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.code = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    resetCodeState: (state) => {
      state.code = '';
      state.language = 'cpp';
    },
  },
});

export const { setCode, setLanguage, resetCodeState } = codeSlice.actions;
export default codeSlice.reducer;
