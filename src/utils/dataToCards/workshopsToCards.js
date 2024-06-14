export default function workshopsToCards(users,committees,workshops){
  
  return workshops.map(workshop=>{
    
   const cardFormFields=Object.keys(workshop).map((field)=>{
    if(field.toLowerCase()==='prerequisites'){
      return{
        label:field.toLowerCase(),
        defaultValue:workshop[field].length>0?workshop[field].join(','):'',
        placeholder:'enter prerequisites each seperated by a comma'
            }}else if(field.toLowerCase()==='id'||field.toLowerCase()==='committee'||field.toLowerCase()==="instructor"){
  
      return undefined
    }else if (field.toLowerCase()==='start_date'){
      const date = new Date(workshop[field]);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    
    return {
      label:field.toLowerCase().replace(/_/g, ' '),
      
      placeholder:'enter start date MM/DD/YYYY',
      defaultValue:formattedDate,
      
      }

    }else if(field.toLowerCase()==='state'){
    
      return{
        label:field.toLowerCase(),options:['not-started',
          'finished',
        'in-progress'
       ] ,
        defaultValue:workshop[field],
        inputType:'dropdown'
            }

    }else{
  return {
  label:field.toLowerCase().replace(/_/g, ' '),
  placeholder:`Enter ${field.toLowerCase().replace(/_/g, ' ')}`,
  defaultValue:workshop[field],
  
  }
    }
    
  }).filter((item)=>item)
  
  
  if(committees){
  
    cardFormFields.push({label:'committee',options:committees.map((committee)=>{
     
      return {name:committee.Title,value:committee.Id}})
    ,inputType:'dropdown',defaultValue:workshop.Committee&&workshop.Committee.Title})
  }
  if(users){
    cardFormFields.push({label:'instructor',options:users.map((user)=>{
     
      return {name:user.Username,value:user.Id}})
    ,inputType:'dropdown',defaultValue:workshop.Instructor&&workshop.Instructor.Username})
  }
    return {
      id:workshop.Id.toString(),
      title:workshop.Title,
      data:{
        instructor:workshop.Instructor.Username
        
      }
      ,cardFormFields
    }
  })
  }
  