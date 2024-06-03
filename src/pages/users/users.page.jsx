
import Button from "../../components/button/button.component";
import CardGrid from '../../components/cardGrid/cardGrid.component';
import SearchBar from "../../components/search-bar/search.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import Modal from "../../components/modal/modal.component";
import ModalForm from "../../components/form/form.component";
import { useState,useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import "./users.style.css";
import {useLoaderData ,Await,useRouteLoaderData} from "react-router-dom";
import { Suspense } from 'react';
import usersToCards from "../../utils/dataToCards/usersToCards";
import { addUserFormData } from "../../utils/formsData";
import createAvaialbleYears from "../../utils/createAvaiableYears";
function Users() {
  
  const {users}=useLoaderData()
  const availableYears=createAvaialbleYears(2023)
  const defaultYear=availableYears[availableYears.length-1]
  const [showModal,setShowModal]=useState(false)
  const [searchInput,setSearchInput]=useState('')
  const [selectedYear,setSelectedYear]=useState(defaultYear)
  const [usersData,setUsersData]=useState([])
 const filteredUsers=usersData.filter((user)=>
{
  if(new Date(user.createdAt).getFullYear().toString()===selectedYear){
    return user.username.toLowerCase().includes(searchInput.toLowerCase())|| user.phone.includes(searchInput)
  }else{
    return false;
  }
  
  }
 )
  useEffect(() => {
    if (users) {
      users.then(data => {setUsersData(data)
             console.log(data)

      }).catch(error => {
        console.error("Failed to load data:", error);
      });
    }
  }, [users]);
  return <>
    <Modal setShowModal={setShowModal} showModal={showModal}><ModalForm buttonText="Add User" showModal={showModal}   cancelButtonHandler={()=>{
      setShowModal(false)
    }} title="Add User" fieldsArr={addUserFormData}/></Modal>
      <main className="section__users">
    <div className="title__cont"><h1 className="primary__title">Users</h1>
    <div className="add_user__cont">
      <Button  onClick={()=>{setShowModal(true)}} select="primary" rounded={false} small={true} outline={false} large={false}><span><IoIosAdd className="add-icon"/></span><span className="add_button__text">
        Add User
        </span>
        </Button>
      </div>
      </div>
    <div className="seperator"></div>
    <div className="search__cont"><div>
      <SearchBar setSearchInput={setSearchInput}/>
      </div>
      <div>

       <Dropdown deafultValue={defaultYear} onSelect={setSelectedYear} options={availableYears}/>
      </div>
       </div>
       <Suspense fallback={<p className="users__loading_text" style={{
       }}>Loading Users...</p>}>
        <Await resolve={users}>
          {(users) => {
          
           
           return <CardGrid cardSize="big" cardFormTitle='Edit User'
cardFormButtonText='Edit User'  gridSize="small" fallbackText="No Users Found." cards={usersToCards(filteredUsers)}/>
          }}
        </Await>
      </Suspense>
  
  </main>
  </>

}

export default Users;
