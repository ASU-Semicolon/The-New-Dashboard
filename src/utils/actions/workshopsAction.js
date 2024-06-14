import { redirect } from "react-router-dom"
import { getToken, isUserAdmin } from "../authData"
export default async function action({request}){
  
  let url='http://localhost:8000/api/workshops/'
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
if(data.get("start date")){
  const [month, day, year] = data.get("start date").split('/');
const date = new Date(year, month - 1, day);
requestFormData.start_date=date.toISOString();
}
    
  requestFormData.title=data.get('title')
  requestFormData.description=data.get('description')
  requestFormData.sessions_per_week=+data.get('sessions per week')
  requestFormData.duration_in_sessions=+data.get('duration in sessions')
  requestFormData.location=data.get('location')
  requestFormData.season=data.get('season')
  requestFormData.state=data.get('state')||undefined
  requestFormData.committee=data.get('committee')||undefined
  requestFormData.instructor=data.get('instructor')||undefined
  requestFormData.prerequisites=data.get('prerequisites')?data.get('prerequisites').toLowerCase().split(','):undefined
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