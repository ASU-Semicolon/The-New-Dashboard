import Button from "../../components/button/button.component";
import CardGrid from '../../components/cardGrid/cardGrid.component';
import SearchBar from "../../components/search-bar/search.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import Modal from "../../components/modal/modal.component";
import ModalForm from "../../components/form/form.component";
import {useEffect, useState ,Suspense} from "react";
import { IoIosAdd } from "react-icons/io";
import "./committees.style.css";
import createAvaialbleYears from "../../utils/createAvaiableYears";
import { useRouteLoaderData,Await,useLoaderData } from "react-router-dom";
import committeesToCards from "../../utils/dataToCards/committeesToCards";
import { addCommitteeFormData } from "../../utils/formsData";
function Committees() {
  const {committees}=useLoaderData()
  const{isAdmin}=useRouteLoaderData('root')
const availableYears=createAvaialbleYears(2023)
const defaultYear=availableYears[availableYears.length-1]
const [showModal,setShowModal]=useState(false)
const [searchInput,setSearchInput]=useState('')
const [selectedYear,setSelectedYear]=useState(defaultYear)
const [committeesData,setCommitteesData]=useState([])
const filteredCommittees=committeesData.filter((committee)=>
{
if(committee.Season===selectedYear){
  return committee.Title&&committee.Title.toLowerCase().includes(searchInput.toLowerCase())
 

}else{
  
  return false;
}

}
)
useEffect(() => {
  if (committees) {
    committees.then(data => {setCommitteesData(data)
           console.log(data)

    }).catch(error => {
      console.error("Failed to load data:", error);
    });
  }
}, [committees]);
  
  return (<> <Modal setShowModal={setShowModal} showModal={showModal}><ModalForm buttonText="Add Committee" showModal={showModal} cancelButtonHandler={()=>{
    setShowModal(false)
  }} title="Add Committee" fieldsArr={addCommitteeFormData}/></Modal>
  <main className="section__committees">
    <div className="title__cont"><h1 className="primary__title">Committees</h1>
    <div className="add_committee__cont">
      <Button select="primary" disabled={!isAdmin} onClick={()=>{setShowModal(true)}} rounded={false} small={true} outline={false} large={false}><span><IoIosAdd className="add-icon"/></span><span className="add_button__text">
        Add Committee
        </span>
        </Button>
      </div>
      </div>
    <div className="seperator"></div>
    <div className="search__cont"><div>
      <SearchBar setSearchInput={setSearchInput} />
      </div>
      <div>

       <Dropdown deafultValue={defaultYear} onSelect={setSelectedYear} options={availableYears}/>
      </div>
       </div>
       <Suspense fallback={<p className="loading_text" style={{
       }}>Loading Committees...</p>}>
        <Await resolve={committees}>
          {(committees) => {
  return <CardGrid cardSize="small" disableButtons={!isAdmin} gridSize="big" cardFormTitle="Edit Committee" cardFormButtonText="Edit Committee" fallbackText="No Committees Found." cards={committeesToCards(filteredCommittees)}/> 
}}
</Await>
</Suspense>

  </main> </>);
}


        
         

export default Committees;
