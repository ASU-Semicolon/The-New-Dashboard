export default function usersToCards(users,committees){
  
return users.map(user=>{
  
 const cardFormFields=Object.keys(user).map((field)=>{
  if(field.toLowerCase()==='active'){
    return{
label:'status',options:['active','inactive'] ,
defaultValue:user[field]?'active':'inactive',
inputType:'dropdown'
    }}else if(field.toLowerCase()==='id'||field.toLowerCase()==='committee'){

    return undefined
  }else{
return {
label:field.toLowerCase()==='username'?'name':field.toLowerCase(),
placeholder:`Enter ${field}`,
defaultValue:user[field],

}
  }
  
}).filter((item)=>item)

cardFormFields.push({
  label:'password',placeholder:'enter password' ,inputType:'password'
})
if(committees){

  cardFormFields.push({label:'committee',options:committees.map((committee)=>{
   
    return {name:committee.Title,value:committee.Id}})
  ,inputType:'dropdown',defaultValue:user.Committee&&user.Committee.Title})
}
  return {
    id:user.Id.toString(),
    title:user.Username,
    data:{
      status:user.Active?'active':'inactive',
      phone:user.Phone,
      role:user.Role
    }
    ,cardFormFields
  }
})
}
