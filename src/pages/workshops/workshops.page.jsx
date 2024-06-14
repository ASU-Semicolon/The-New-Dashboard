
import Button from "../../components/button/button.component";
import CardGrid from '../../components/cardGrid/cardGrid.component';
import SearchBar from "../../components/search-bar/search.component";
import Dropdown from "../../components/dropdown/dropdown.component";
import { Await,useLoaderData,useRouteLoaderData } from "react-router-dom";
import { addWorkshopFormData } from "../../utils/formsData";
import workshopsToCards from "../../utils/dataToCards/workshopsToCards";
import { IoIosAdd } from "react-icons/io";
import "./workshops.style.css";
import { useState ,useEffect,Suspense} from "react";
import Modal from "../../components/modal/modal.component";
import ModalForm from "../../components/form/form.component";
import createAvaialbleYears from "../../utils/createAvaiableYears";


function Workshops() {
  const {users,committees,workshops}=useLoaderData()
  const{isAdmin}=useRouteLoaderData('root')
  const availableYears=createAvaialbleYears(2023)
  const defaultYear=availableYears[availableYears.length-1]
  const [showModal,setShowModal]=useState(false)
  const [searchInput,setSearchInput]=useState('')
  const [selectedYear,setSelectedYear]=useState(defaultYear)
  const [usersData,setUsersData]=useState(undefined)

  const [workshopsData,setWorkshopsData]=useState([])
  const [committeesData,setCommitteesData]=useState(undefined)
 const filteredWorkshops=workshopsData.filter((workshop)=>
{
  if(workshop.Season===selectedYear){
    return workshop.Title.toLowerCase().includes(searchInput.toLowerCase())
  }else{
    return false;
  }
  
  }
 )
  useEffect(() => {
    if (users) {
      users.then(data => {setUsersData(data)
           

      }).catch(error => {
        console.error("Failed to load data:", error);
      });
    }
    if (committees) {
      committees.then(data => {setCommitteesData(data)
           

      }).catch(error => {
        console.error("Failed to load data:", error);
      });
    }
    if (workshops) {
      workshops.then(data => {setWorkshopsData(data)
           

      }).catch(error => {
        console.error("Failed to load data:", error);
      });
    }
  }, [users,workshops,committees]);
  
  
  return (<> <Modal setShowModal={setShowModal} showModal={showModal}><ModalForm buttonText="Add Workshop" showModal={showModal}   cancelButtonHandler={()=>{
    setShowModal(false)
  }} title="Add Workshop" fieldsArr={addWorkshopFormData(committeesData,usersData)}/></Modal>
   <main className="section__workshops">
    <div className="title__cont"><h1 className="primary__title">Workshops</h1>
    <div className="add_workshop__cont">
      <Button select="primary" onClick={()=>{
        setShowModal(true)
      }} disabled={!committeesData||!usersData||!isAdmin} rounded={false} small={true} outline={false} large={false}><span><IoIosAdd className="add-icon"/></span><span className="add_button__text">
        Add Workshop
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
       <Suspense fallback={<p className="loading_text" style={{
       }}>Loading Workshops...</p>}>
        <Await resolve={workshops}>
          {(workshops) => {
          
           
           return <CardGrid disableButtons={!committeesData||!usersData||!isAdmin} cardSize="small" cardFormTitle='Edit Workshop'
cardFormButtonText='Edit Workshop'   gridSize="big" fallbackText="No Workshops Found." cards={workshopsToCards(usersData,committeesData,filteredWorkshops)}/>
          }}
        </Await>
      </Suspense>
  </main> 
  </>
   );
}

export default Workshops;