import { createSlice } from "@reduxjs/toolkit";

const membersSlice = createSlice({
    name: "members",
    initialState: [],
    reducers: {
        loadMembers: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});
export default membersSlice.reducer;
export const { loadMembers } = membersSlice.actions;
