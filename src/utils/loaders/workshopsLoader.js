import { defer, redirect } from "react-router-dom"
import { getToken, isUserAdmin } from "../authData"
import { loadCommittees } from "./committeesLoader"
import { loadUsers } from "./usersLoader"
 async function  loadWorkshops(){
  const token=getToken()



  const response=await fetch('http://localhost:8000/api/workshops',{
    headers:{
      Authorization:'Bearer '+token
    

    }
  })
  

 const {data}= await response.json()

 return data
}
async function  loadStates(){
  const token=getToken()



  const response=await fetch('http://localhost:8000/api/constants?type=workshop-states',{
    headers:{
      Authorization:'Bearer '+token
    

    }
  })
  

 const {data}= await response.json()

 return data
}
export default async function loader(){
  const token=getToken()
 
  if(!token){
    return redirect('/login')
  }
  
  return defer({
    users:loadUsers()
,committees: loadCommittees(),
workshops:loadWorkshops()
,states:loadStates()

  })
}