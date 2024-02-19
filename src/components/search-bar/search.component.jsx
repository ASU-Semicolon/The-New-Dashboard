import { useState } from "react";
import searchLogo from "../../assets/search.svg";
import "./search.style.css";

const SearchBar = ({ searchInput, setSearchInput }) => {
    const [isEntered, setEntered] = useState(false);

    const HandleChange = (value) => {
        setSearchInput(value);
    };

    const EnterEvent = (event) => {
        if (event.keyCode === 13) {
            setEntered((current) => !current);
            setTimeout(function () {
                setEntered((current) => !current);
            }, 400);
        }
    };

    return (
        <div className="search-bar-container">
            <img src={searchLogo} className="logo-search" alt="search logo" />
            <input
                type="text"
                id="Text"
                className={
                    isEntered ? "entered-text text-search" : "text-search"
                }
                value={searchInput}
                placeholder="Search"
                onChange={(e) => HandleChange(e.target.value)}
                onKeyDown={(e) => EnterEvent(e)}
            />
        </div>
    );
};

export default SearchBar;
