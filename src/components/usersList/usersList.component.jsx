import { useEffect, useState } from "react";
import Dropdown from "../dropdown/dropdown.component";
import SearchBar from "../search-bar/search.component";
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import "./usersList.style.css";

/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {string} [track] - The value for the first filter (example: track).
 * @property {string} [status] - The value for the second filter (example: status).
 * @property {string} [event] - The value for the third filter (example: event).
 *
 * Important: All attributes of User key names should be lowercase for the component to work properly.
 */

/**
 * UsersList component for displaying a list of users with filters and search functionality.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {User[]} props.users - An array of user objects to display.
 * @param {string} [props.firstFilterName="track"] - The name of the first filter.
 * @param {string[]} [props.firstFilterOptions=[]] - Options for the first filter.
 * @param {string} [props.secoundFilterName="status"] - The name of the second filter.
 * @param {string[]} [props.secoundFilterOptions=[]] - Options for the second filter.
 * @param {string} [props.thirdFilterName="event"] - The name of the third filter.
 * @param {string[]} [props.thirdFilterOptions=[]] - Options for the third filter.
 * @param {boolean[]} [props.backendFiltering=[false, false, false]] - Array of booleans to indicate if filtering should be done on the backend.
 * @param {string} [props.searchbarPlaceholder="Name or ID"] - Placeholder text for the search bar.
 * @param {string[]} [props.searchbarFilters=["name", "id"]] - Filters for the search bar.
 * @param {string} [props.fallbackText="no users found !"] - Text to display when no users are found.
 *
 * @returns {JSX.Element} The UsersList component.
 */
function UsersList({
    users = [],
    firstFilterName = "track",
    firstFilterOptions = [],
    secoundFilterName = "status",
    secoundFilterOptions = [],
    thirdFilterName='event',
    thirdFilterOptions=[],
    thirdFilterDefaultValue='',
    backendFiltering=[false,false,false],
    searchbarPlaceholder = "Name or ID",
    searchbarFilters = ["name", "id"],
    fallbackText = "no users found !",
    filteredUsers=[],
    setFilteredUsers=()=>{}
    
}) {
    const location = useLocation();
  const navigate = useNavigate();
 
    const searchParams = new URLSearchParams(location.search);
    const [searchInput, setSearchInput] = useState("");
    const [firstFilterValue, setFirstFilterValue] = useState("");
    const [secoundFilterValue, setsecoundtFilterValue] = useState("");
    const [thirdFilterValue, setThirdFilterValue] = useState("");



    useEffect(()=>{
if(backendFiltering[0]&&firstFilterValue){
    searchParams.set(firstFilterName.toLowerCase(),firstFilterValue);
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
}
    },[firstFilterValue])

    useEffect(()=>{
if(backendFiltering[1]&&secoundFilterValue){
    searchParams.set(secoundFilterName.toLowerCase(),secoundFilterValue);
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });

} 
    },[secoundFilterValue])

    useEffect(()=>{
if(backendFiltering[2]&&thirdFilterValue){
    searchParams.set(thirdFilterName.toLowerCase(),thirdFilterValue);
        navigate(`${location.pathname}?${searchParams.toString()}`, { replace: true });
}
    },[thirdFilterValue])
   
   
    useEffect(()=>{
        if(users){
            
             setFilteredUsers(users.filter((user) => {
        let searchMatch = false;
        searchbarFilters.forEach((searchFilter) => {
            const propertyValue = user[searchFilter.toLowerCase()].toString();
            if (
                propertyValue &&
                propertyValue.toLowerCase().includes(searchInput.toLowerCase())
            ) {
                searchMatch = true;
            }
        });
        if (!searchMatch) {
            return searchMatch;
        }
        if (
            !backendFiltering[0]&&firstFilterValue.length > 0 &&
            user[firstFilterName.toLowerCase()].toLowerCase() !==
                firstFilterValue.toLowerCase()
        ) {
            return false;
        }
        if (
            !backendFiltering[1]&&secoundFilterValue.length > 0 &&
            user[secoundFilterName.toLowerCase()].toLowerCase() !==
                secoundFilterValue.toLowerCase()
        ) {
            return false;
        }
        if (
            !backendFiltering[2]&&thirdFilterValue.length > 0 &&
            user[thirdFilterName.toLowerCase()].toLowerCase() !==
                thirdFilterValue.toLowerCase()
        ) {
            return false;
        }
        return true;
    })
)
}
},[users,firstFilterValue,secoundFilterValue,thirdFilterValue,searchInput])
    return (
        <div className="users-cont">
            <div className="search-filter-cont">
                <SearchBar
                    borderRadius={4}
                    placeholder={searchbarPlaceholder}
                    setSearchInput={setSearchInput}
                />
                <Dropdown paddingSize='big'
                    deafultValue={
                        firstFilterName.length > 0 ? firstFilterName : undefined
                    }
                    onSelect={setFirstFilterValue}
                    options={firstFilterOptions}
                />
                <Dropdown paddingSize='big'
                    deafultValue={
                        secoundFilterName.length > 0
                            ? secoundFilterName
                            : undefined
                    }
                    onSelect={setsecoundtFilterValue}
                    options={secoundFilterOptions}
                />
                <Dropdown
                    deafultValue={
                        thirdFilterDefaultValue||thirdFilterName
                    }
                    onSelect={setThirdFilterValue}
                    options={thirdFilterOptions}
                />
            </div>
            {filteredUsers.length > 0 ? (
                <ul className="users-list">
                    {filteredUsers.map((user) => (
                        <li key={user.id}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active user-link" : "user-link"
                                }
                                to={`${user.id}?${searchParams.toString()}`}
                            >
                                <span>{user.name.toLowerCase()}</span>
                                <span>{user.phone}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="users-list-fallback-text">{fallbackText}</p>
            )}
        </div>
    );
}

export default UsersList;