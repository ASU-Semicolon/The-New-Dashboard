import './search.css'
import searchlogo from '../assets/search.svg'
import React, { useEffect } from 'react';



const Search = () => {
  let textclass='text';
  let logoclass='logo';

  // useEffect(() => {
  //   document.addEventListener('keydown',(e) =>{
  //     if(e.key === 13){
  //     textclass+=" enteredtext";
  //     logoclass+=" enteredlogo";}});
  // }
  // )


  return (
     <div className='search-bar-container'>
     <img src={searchlogo} className={logoclass} alt="search logo" />
     <input type={textclass} className='text' placeholder="Search" />
     </div>
  )
}

export default Search