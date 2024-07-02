import { redirect } from "react-router-dom"
import { getToken, isUserAdmin } from "../authData"
export default async function action({request}){
  
  let url='http://localhost:8000/api/users/'
  const data=await request.formData()
  const id=data.get('id')
  const token=getToken()
  const isAdmin=isUserAdmin()
  if(!token){
    return redirect('/login')
  }
if(!isAdmin){
  return redirect("/committees") 
}


  const requestFormData={}
  requestFormData.username=data.get('name')
  requestFormData.password=data.get('password')?data.get('password'):undefined
  requestFormData.active=typeof data.get('status')==='string'?(data.get('status').length===0?undefined:data.get('status').toLowerCase()==='active'):undefined
  requestFormData.role=data.get('role')
  requestFormData.phone=data.get('phone')
  requestFormData.season=data.get('season')
  requestFormData.committee=data.get('committee')||undefined
  
  const options={
    method:request.method,
    headers:{
      'Content-Type':'application/json',
      Authorization:'Bearer '+token
      

    },
    body:JSON.stringify(requestFormData)

  }
  if(request.method.toLowerCase()==='patch'){
url+=id


  }else if(request.method.toLowerCase()==='delete'){
    
    url+=id
    options.body=undefined
  }
  
  const response=await fetch(url,options)
const returnedData={
  method:request.method.toLowerCase(),
status:response.status
}
const responseData= await response.json()
if(response.status===200||response.status===201){
returnedData.actionData={id:id||responseData.data.id,
  data:responseData.data
}
}
else{
  returnedData.errors=responseData.message
}
return returnedData
}