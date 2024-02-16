import { useState } from "react";
import SearchBar from "./components/search-bar/search.component.jsx";

function App() {  
    const [searchinput,setSearchInput]= useState("");
return (
    <div className='App'>
        <SearchBar  
        setSearchInput={setSearchInput} 
        searchinput={searchinput}/>
    </div>
);
}

export default App