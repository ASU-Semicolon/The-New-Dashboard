import { createSlice } from "@reduxjs/toolkit";
const initialState={
  sectors:[],
  states:[],
  events:[],
  status:[]
}
const constantsSlice=createSlice({
name:'constants',
initialState,
reducers:{
loadSectors:(state,action)=>{
  state.sectors=action.payload
  return state
},
loadStates:(state,action)=>{
  state.states=action.payload
  return state
},
loadEvents:(state,action)=>{
  state.events=action.payload
  return state
},
loadStatus:(state,action)=>{
  state.status=action.payload
  return state
}

}
})
export default constantsSlice.reducer
export const {loadSectors,loadStates,loadEvents,loadStatus} =constantsSlice.actions