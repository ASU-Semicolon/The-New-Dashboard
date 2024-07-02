import { createSlice } from "@reduxjs/toolkit";

const studentsSlice=createSlice({
  name:'students',
  initialState:[],
  reducers:{
    loadStudents:(state,action)=>{
      state=action.payload
      return state
    }

  }
})
export default  studentsSlice.reducer
export const {loadStudents}=studentsSlice.actions
