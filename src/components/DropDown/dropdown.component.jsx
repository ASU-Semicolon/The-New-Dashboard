import React, { useState, useEffect, useRef } from "react";
import "./dropdown.style.css";
import { MdOutlineExpandMore } from "react-icons/md";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label || option.value);
    // onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
      
        <div className="dropdown-toggle-text">{selectedOption || (options.length > 0 && options[0].label) || "Select an option"}</div>
        <MdOutlineExpandMore style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",}} />
        
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label || option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
