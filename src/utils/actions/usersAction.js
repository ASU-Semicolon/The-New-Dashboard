import { redirect } from "react-router-dom"
import { getToken, isUserAdmin } from "../authData"
export default async function action({request}){
  
  let url='http://localhost:8000/users/'
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
  requestFormData.active=data.get('status')&&data.get('status').toLowerCase()==='active'
  requestFormData.role=data.get('role')
  requestFormData.phone=data.get('phone')
  const options={
    method:request.method,
    headers:{
      'Content-Type':'application/json',
      Authorization:'Bearer '+token
      

    },
    body:JSON.stringify(requestFormData)

  }
  if(request.method.toLowerCase()==='patch'){
url+='update/'+id


  }else if(request.method.toLowerCase()==='delete'){
    
    url+=id
    options.body=undefined
  }
  
  const response=await fetch(url,options)

const responseData= await response.json()
console.log(responseData)
return responseData
}