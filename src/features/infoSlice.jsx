import { createSlice } from "@reduxjs/toolkit";
const infoSlice = createSlice({
  name: "info",
  initialState: {

    univercities:null,
    departments:null,
    allDepartments:null,
    cities:null,

    error: false,
    userInfo: null,
    loading: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },
    getUniSuccess: (state, { payload }) => {
      state.univercities = payload;
      state.loading = false;
    },
    getDepSuccess: (state, { payload }) => {
      state.departments = payload;
      state.loading = false;
    },

    getDepAllSuccess:(state, { payload })=> {
      state.allDepartments = payload;
    },
    getCitiesSuccess:(state, { payload })=> {

      state.cities = payload;
      state.loading = false;
    },

    fetchFail: (state) => {
      state.error = true;
      state.loading = false;
    },
    getUserInfoSuccess: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },

  },
});
export const {
  fetchStart,
  getUniSuccess,
  fetchFail,
  getDepSuccess,
  getDepAllSuccess,
  getCitiesSuccess,
  getUserInfoSuccess,
} = infoSlice.actions;
export default infoSlice.reducer;
