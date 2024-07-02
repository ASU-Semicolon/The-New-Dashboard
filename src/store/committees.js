import { createSlice } from "@reduxjs/toolkit";

const committeesSlice=createSlice({
  name:'committees',initialState:[],
  reducers:{
addCommittee:(state,action)=>{
  state.push(action.payload)
  return state
},
editCommittee:(state,action)=>{
  const committeeIndex=state.findIndex((committee)=>committee.Id===action.payload.id)
  state[committeeIndex]=action.payload.data
  return state
},
deleteCommittee:(state,action)=>{
  state=state.filter((committee)=>committee.Id!==action.payload)
  return state
},
loadCommittees:(state,action)=>{
state=action.payload
return state
},

  }
})
export default committeesSlice.reducer
export const{loadCommittees,addCommittee,editCommittee,deleteCommittee}=committeesSlice.actions