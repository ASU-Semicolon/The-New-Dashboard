export default function usersToCards(users){
return users.map(user=>{
  
 const cardFormFields=Object.keys(user).map((field)=>{
  if(field==='active'){
    return{
label:'status',options:['active','inactive'] ,
defaultValue:user[field]?'active':'inactive',
inputType:'dropdown'
    }}else if(field==='createdAt'||field==='updatedAt'||field==='_id'||field==='__v'){

    return undefined
  }else{
return {
label:field==='username'?'name':field,
placeholder:`Enter ${field}`,
defaultValue:user[field],

}
  }
  
}).filter((item)=>item)

cardFormFields.push({
  label:'password',placeholder:'enter password' ,inputType:'password'
})
  return {
    id:user._id.toString(),
    title:user.username,
    data:{
      status:user.active?'active':'inactive',
      phone:user.phone,
      role:user.role
    }
    ,cardFormFields
  }
})
}
