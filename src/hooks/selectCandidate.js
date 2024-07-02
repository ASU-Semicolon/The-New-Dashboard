import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function useSelectCandidate(candidates, candidateId, candidateType, candidateEvent, urlSegment) {
  const navigate = useNavigate();
 const [selectedCandidate,setSelectedCandidate]=useState()
 
  
  useEffect(() => {
    if (candidateId && candidates) {
      const candidate = candidates.find((candidate) => candidate.Id === candidateId);
      
      if (candidate) {
        setSelectedCandidate(candidate)
        
      } else {
        if(selectedCandidate){
          setSelectedCandidate(undefined)
          let url=`/${urlSegment}?type=${candidateType}`
          if(candidateEvent){
            url+=`&event=${candidateEvent}`
          }
          navigate(url, { replace: true });
        }
      }
    }
  }, [candidates,setSelectedCandidate, navigate,candidateId]);

  return selectedCandidate;
}

export default useSelectCandidate;