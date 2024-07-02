import { createSlice } from "@reduxjs/toolkit";

const workshopsSlice = createSlice({
    name: "workshops",
    initialState: [],
    reducers: {
        deleteWorkshop: (state, action) => {
            state = state.filter((workshop) => action.payload !== workshop.Id);
            return state;
        },
        loadWorkshops: (state, action) => {
            state = action.payload;
            return state;
        },
        addWorkshop: (state, action) => {
            state.push(action.payload);
            return state;
        },
        editWorkshop: (state, action) => {
            const workshopIndex = state.findIndex(
                (workshop) => action.payload.id === workshop.Id,
            );
            state[workshopIndex] = action.payload.data;
            return state;
        },
    },
});
export default workshopsSlice.reducer;
export const { editWorkshop, deleteWorkshop, addWorkshop, loadWorkshops } =
    workshopsSlice.actions;
