import React, { useState, useEffect, useRef } from "react";
import "./dropdown.style.css";
import { MdOutlineExpandMore } from "react-icons/md";
/**
 * Dropdown component for selecting options.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {Array[string|option]} props.options - An array of options to be displayed in the dropdown.
 * @param {Function} props.onSelect - A function to be called when an option is selected.
 * @param {string} [props.deafultValue="Select an option"] - The default value to display when no option is selected.
 *
 * @returns {JSX.Element} - The Dropdown component.
 *
 *  @typedef {Object} option
 * @property {string} name - The name of the option.
 * @property {string} value
 */
const Dropdown = ({
    options = [],
    paddingSize = "small",
    onSelect = () => {},
    deafultValue = "Select an option",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const dropdownRef = useRef(null);

    const handleOptionClick = (option) => {
        if (typeof option === "object") {
            setSelectedOption(option.name.toLowerCase());
            onSelect(option.value.toLowerCase());
        } else {
            setSelectedOption(option);
            onSelect(option);
        }
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div
                className={`${paddingSize.toLowerCase()} dropdown-toggle`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="dropdown-toggle-text">
                    {selectedOption || deafultValue}
                </div>
                <MdOutlineExpandMore
                    style={{
                        transform: `rotate(${isOpen ? 180 : 0}deg)`,
                        transition: "all 0.25s",
                    }}
                />
            </div>
            {isOpen && options.length > 0 && (
                <ul className="dropdown-menu">
                    {options.map((option) => (
                        <li
                            key={
                                typeof option === "object"
                                    ? option.value
                                    : option
                            }
                            className={`${paddingSize.toLowerCase()} dropdown-item`}
                            onClick={() =>
                                handleOptionClick(
                                    typeof option === "object"
                                        ? option
                                        : option.toLowerCase(),
                                )
                            }
                        >
                            {typeof option === "object"
                                ? option.name.toLowerCase()
                                : option.toLowerCase()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
