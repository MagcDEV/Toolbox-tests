import { createSlice } from "@reduxjs/toolkit";

const filesSlice = createSlice({
  name: "getFiles",
  initialState: {
    files: [],
    isLoading: false,
  },
  reducers: {
    startLoadingFiles: (state /* action */) => {
      state.isLoading = true;
    },
    setFiles: (state, action) => {
      state.isLoading = false;
      state.files = action.payload.files;
    },
  },
});

export const {startLoadingFiles, setFiles} = filesSlice.actions;

export default filesSlice.reducer;
