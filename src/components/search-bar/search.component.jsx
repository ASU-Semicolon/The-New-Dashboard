import searchlogo from '../../assets/search.svg';
import "./search.style.css"

const SearchBar = ({searchinput}) => {
  

      const eventkey = (event) => {
      if(event.keyCode === 13){
        document.getElementById("Text").classList.add("enteredtext");
        setTimeout(function(){document.getElementById("Text").classList.remove("enteredtext")
      },500)
    }      
    }
  

  return (
     <div className='search-bar-container'>
     <img src={searchlogo} className="logo-search" alt="search logo" />
     <input type='text' id="Text" className="text-search" value={searchinput} placeholder="Search" onKeyDown={(e) => eventkey(e)}/>
     </div>
  )
}

export default SearchBar