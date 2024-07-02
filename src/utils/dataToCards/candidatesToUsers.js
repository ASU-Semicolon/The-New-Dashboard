export default function candidatesToUsers(candidates){
  if(candidates
  ){
    
    return candidates.map((candidate)=>{
      let track
      if(candidate.AcceptanceStatus==='accepted-second-preference'||candidate.AcceptanceStatus==='delegated'){
        track=candidate.SecondPreference
      
      }else{
        track=candidate.FirstPreference
      }
      
      return{
      id:candidate.Id,
      name:candidate.Name,
      event:candidate.Event,
      phone:candidate.Phone,
      status:candidate.AcceptanceStatus,
      track
    }})
  }

}