import { useDispatch } from "react-redux";
import { useState,useEffect } from "react";
function useFetchData(data,loadData){
const [isFetching,setIsFetching]=useState(true)
const dispatch=useDispatch()
useEffect(() => {
  (async()=>{
    
    if (data) {
    const fetchedData= await data
    dispatch(loadData(fetchedData))
    setIsFetching(false)
    }
  })()
 
}, [data]);
return isFetching
}
export default useFetchData