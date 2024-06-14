import { redirect } from "react-router-dom"
import { getToken, isUserAdmin } from "../authData"
export default async function action({request}){
 
  let url='http://localhost:8000/api/committees/'
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
  requestFormData.brief=data.get('brief')
  requestFormData.description=data.get('description')
  requestFormData.director=data.get('director')&&data.get('director').toLowerCase().trim()
  requestFormData.image=data.get('image')
  requestFormData.sector=data.get('sector')||undefined
  requestFormData.season=data.get('season')
  requestFormData.title=data.get('title')&&data.get('title').toLowerCase().trim()
  requestFormData.vice_director=data.get('vice director')?data.get('vice director').toLowerCase().trim():undefined
  requestFormData.heads=data.get('heads')?data.get('heads').toLowerCase().split(','):undefined
  console.log(requestFormData)
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

const responseData= await response.json()
console.log(responseData)
return responseData
}