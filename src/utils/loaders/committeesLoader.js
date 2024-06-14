import { redirect,defer } from "react-router-dom"
import { getToken } from "../authData"

 export async function  loadCommittees(){
  const token=getToken()



  const response=await fetch('http://localhost:8000/api/committees',{
    headers:{
      Authorization:'Bearer '+token
    

    }
  })
  

 const {data}= await response.json()
 console.log(data)
 return data
}
export default async function loader(){
  const token=getToken()
 
  if(!token){
    return redirect('/login')
  }
  
  
  return defer({
    committees:loadCommittees()
  })
}
