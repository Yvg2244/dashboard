import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    groupBy: localStorage.getItem("groupBy")
      ? localStorage.getItem("groupBy")
      : "priority",
    orderBy: localStorage.getItem("orderBy")
      ? localStorage.getItem("orderBy")
      : "priority",
    userData: [],
    ticketData: [],
    // groupBy: "status",
  },
  reducers: {
    updateGroupBy: (state, action) => {
      state.groupBy = action.payload;
    },
    updateOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    updateUsers: (state, action) => {
      state.userData = [...action.payload];
    },
    updateTicket: (state, action) => {
      state.ticketData = [...action.payload];
    },
  },
});
export const { updateGroupBy,updateOrderBy, updateUsers, updateTicket } = cartSlice.actions;
export default cartSlice.reducer;
