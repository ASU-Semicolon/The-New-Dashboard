import { useState } from "react";
import Dropdown from "../dropdown/dropdown.component";
import SearchBar from "../search-bar/search.component";
import { NavLink } from "react-router-dom";
import "./usersList.style.css";
/**
 *
 *
 * @typedef {Object} User
 * @property {string} id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {string} [props.firstFilterName] - The value for the first filter .
 * @property {string} [props.secoundFilterName] - The value for the second filter.
 *
 * Important all attributes of User key names should be lowercase for component to work
 *
 */

/**
 * UsersList component for displaying a list of users with filters and search functionality.
 * @component
 * @param {Object} props - The component properties.
 * @param {User[]} props.users - An array of user objects to display.
 * @param {string} [props.firstFilterName="track"] - The name of the first filter.
 * @param {string[]} [props.firstFilterOptions=[]] - Options for the first filter.
 * @param {string} [props.secoundFilterName="status"] - The name of the second filter.
 * @param {string[]} [props.secoundFilterOptions=[]] - Options for the second filter.
 * @param {string} [props.searchbarPlaceholder="Name or ID"] - Placeholder text for the search bar.
 * @param {string[]} [props.searchbarFilters=["name", "id"]] - Filters for the search bar.
 * @param {string} [props.fallbackText="no users found !"] - Text to display when no users are found.
 *
 * @returns {JSX.Element} - The UsersList component.
 *
 */
function UsersList({
    users = [],
    firstFilterName = "track",
    firstFilterOptions = [],
    secoundFilterName = "status",
    secoundFilterOptions = [],
    searchbarPlaceholder = "Name or ID",
    searchbarFilters = ["name", "id"],
    fallbackText = "no users found !",
}) {
    const [searchInput, setSearchInput] = useState("");
    const [firstFilterValue, setFirstFilterValue] = useState("");
    const [secoundFilterValue, setsecoundtFilterValue] = useState("");
    const filteredUsers = users.filter((user) => {
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
            firstFilterValue.length > 0 &&
            user[firstFilterName.toLowerCase()].toLowerCase() !==
                firstFilterValue.toLowerCase()
        ) {
            return false;
        }
        if (
            secoundFilterValue.length > 0 &&
            user[secoundFilterName.toLowerCase()].toLowerCase() !==
                secoundFilterValue.toLowerCase()
        ) {
            return false;
        }
        return true;
    });
    return (
        <div className="users-cont">
            <div className="search-filter-cont">
                <SearchBar
                    borderRadius={4}
                    placeholder={searchbarPlaceholder}
                    setSearchInput={setSearchInput}
                />
                <Dropdown
                    deafultValue={
                        firstFilterName.length > 0 ? firstFilterName : undefined
                    }
                    onSelect={setFirstFilterValue}
                    options={firstFilterOptions}
                />
                <Dropdown
                    deafultValue={
                        secoundFilterName.length > 0
                            ? secoundFilterName
                            : undefined
                    }
                    onSelect={setsecoundtFilterValue}
                    options={secoundFilterOptions}
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
                                to={`/${user.id}`}
                            >
                                <span>{user.name.toLowerCase()}</span>
                                <span>{user.id}</span>
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
