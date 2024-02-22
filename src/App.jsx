import { useState } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader/PageHeader.component";
import Modal from"./components/modal/modal.component";

function App() {
    let headertext = "Users";
    let btntext = "Add Users";
    const [showModal,setShowModal]=useState();

    return (
    <>
    <PageHeader
      setShowModal={setShowModal}
      headertext={headertext}
      btntext={btntext}/>

    <Modal
    setShowModal={setShowModal}
    showModal={showModal}
    />
        </>
    );

}

export default App;
