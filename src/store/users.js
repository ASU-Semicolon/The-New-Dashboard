import { createSlice } from "@reduxjs/toolkit";

const usersSlice=createSlice({
  name:'users',
  initialState:[],
  reducers:{
    deleteUser:(state,action)=>{
      state=state.filter((user)=>action.payload!==user.Id)
      return state
    }
    ,
    loadUsers:(state,action)=>{
      
state=action.payload
return state
    },
    addUser:(state,action)=>{
      state.push(action.payload)
      return state
    },
    editUser:(state,action)=>{
      const userIndex=state.findIndex((user)=>action.payload.id===user.Id)
      state[userIndex]=action.payload.data
      return state
    }
  }
  
})
export default usersSlice.reducer
export const {deleteUser,addUser,editUser,loadUsers}=usersSlice.actions