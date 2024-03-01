import { useEffect, useState } from "react";
import searchLogo from "../../assets/search.svg";
import "./search.style.css";
/**
 * SearchBar component for handling search input and submission.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Function} props.setSearchInput - The function to set the search input value.
 *
 * @returns {JSX.Element} - The SearchBar component.
 */
const SearchBar = ({ setSearchInput = () => {} }) => {
    const [isEntered, setIsEntered] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const changeHandler = (value) => {
        setIsEntered(false);
        setSearchValue(value);
    };
    //submit search  after 1.5sec from last change of input value if it is not empty
    useEffect(() => {
        let timer;
        if (searchValue.length > 0) {
            timer = setTimeout(() => {
                setIsEntered(true);
                setSearchInput(searchValue);
                setSearchValue("");
            }, 1500);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [searchValue]);

    //submit search by pressing search button
    const submitHandler = () => {
        setIsEntered(true);
        setSearchInput(searchValue);
        setSearchValue("");
    };
    //submit search by pressing enter key
    const enterKeyHandler = (e) => {
        if (e.key === "Enter") {
            setIsEntered(true);
            setSearchInput(searchValue);
            setSearchValue("");
        }
    };
    return (
        <div className="search-bar-container">
            <button
                disabled={isEntered}
                className="search-button"
                onClick={submitHandler}
            >
                <img
                    src={searchLogo}
                    className="logo-search"
                    alt="search logo"
                />
            </button>
            <input
                type="text"
                id="Text"
                className={
                    isEntered ? "entered-text text-search" : "text-search"
                }
                value={searchValue}
                placeholder="Search"
                onChange={(e) => changeHandler(e.target.value)}
                onKeyDown={enterKeyHandler}
            />
        </div>
    );
};

export default SearchBar;
