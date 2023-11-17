import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateGroupBy,updateOrderBy } from "../cartSlice";
import Arrow from "../assets/Arrow.png";
const DropDownButton = ({ options, storageEvent }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch=useDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (value) => {
    localStorage.setItem(storageEvent, value);
    if (storageEvent=="groupBy")
    dispatch(updateGroupBy(value))
    else
    dispatch(updateOrderBy(value))
    setSelectedValue(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle shadow border bold text-secoundary"
        onClick={toggleDropdown}
      >
        {selectedValue.charAt(0).toUpperCase() + selectedValue.slice(1)}{" "}
        <span className={`arrow ${isDropdownOpen ? "up" : "down"}`}>
        <img src={Arrow} />
        </span>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-content-secoundary">
          <div className="dropdown-content-secoundary-options flex-col bg-primary border shadow text-third">
            {/* Dropdown options */}
            {options.map((items,index) => {
              return (
                <span key={index} onClick={() => handleSelect(`${items.value}`)}>
                  {items.key}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
