import Button from "../../components/button/button.component";
import CardGrid from '../../components/cardGrid/cardGrid.component';
import SearchBar from "../../components/search-bar/search.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import Modal from "../../components/modal/modal.component";
import ModalForm from "../../components/form/form.component";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import "./committees.style.css";
const cards=[
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
  {title:'Web Development',data:{directorName:'Director Name'}},
 
]
const addCommitteeFormData=[
  {label:'title' ,placeholder:'Enter Title'},
  {label:'description' ,placeholder:'Enter Description',multiline:true },
  {label:'brief' ,placeholder:'Enter Brief'},
  {label:'sector' ,placeholder:'Enter Sector'},
]
function Committees() {
  const [showModal,setShowModal]=useState(false)
  return (<> <Modal setShowModal={setShowModal} showModal={showModal}><ModalForm buttonText="Add Committee" cancelButtonHandler={()=>{
    setShowModal(false)
  }} title="Add Committee" fieldsArr={addCommitteeFormData}/></Modal>
  <main className="section__committees">
    <div className="title__cont"><h1 className="primary__title">Committees</h1>
    <div className="add_committee__cont">
      <Button select="primary" onClick={()=>{setShowModal(true)}} rounded={false} small={true} outline={false} large={false}><span><IoIosAdd className="add-icon"/></span><span className="add_button__text">
        Add Committee
        </span>
        </Button>
      </div>
      </div>
    <div className="seperator"></div>
    <div className="search__cont"><div>
      <SearchBar/>
      </div>
      <div>

       <Dropdown deafultValue="2020" options={['2020','2021','2022','2023','2024']}/>
      </div>
       </div>
  {/* <CardGrid cardSize="small" gridSize="big" fallbackText="No Committees Available yet" cards={cards}/> */}
  </main> </>);
}

export default Committees;