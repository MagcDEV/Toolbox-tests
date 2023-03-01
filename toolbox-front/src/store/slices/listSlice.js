import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "getList",
  initialState: {
    list: [],
    isLoadingList: false,
  },
  reducers: {
    startLoadingList: (state /* action */) => {
      state.isLoadingList = true;
    },
    setList: (state, action) => {
      state.isLoadingList = false;
      state.list = action.payload.list;
    },
  },
});

export const {startLoadingList, setList} = listSlice.actions;

export default listSlice.reducer;
