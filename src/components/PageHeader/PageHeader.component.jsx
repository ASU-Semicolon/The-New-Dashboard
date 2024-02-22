import React from 'react';
import "./PageHeader.style.css";
import add from "../../assets/add.svg";


function PageHeader({setShowModal,headertext, btntext}) {
  return (
    <div className="header-container">
        <h1 
        className="header-text">
            {headertext}
            </h1>
        <button onClick={()=>{setShowModal(true)}}
        className="add-user-btn"> 
        <img src={add}/> 
        <strong>
        {btntext}
        </strong>
        </button>
    </div>
  )
}

export default PageHeader