import React, { useState } from "react";
import DropDownButton from "./DropDownButton";
import Slider from "../assets/Slider.png";
import Arrow from "../assets/Arrow.png";
const FilterButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle bold text-secoundary shadow border"
        onClick={toggleDropdown}
      >
        <span className="navbar-logo">
          <img src={Slider} alt="" />
        </span>
        Display{" "}
        <span className={`arrow ${isDropdownOpen ? "up" : "down"}`}>
          <img src={Arrow} />
        </span>
      </button>

      {isDropdownOpen && (
        <div className="dropdown-content s-12 bold bg-primary flex-col shadow border">
          {/* Dropdown content goes here */}
          <div className="flex just-btw text-secoundary align-center">
            Grouping{" "}
            <DropDownButton
              options={[
                { key: "Status", value: "status" },
                { key: "Priority", value: "priority" },
                { key: "User", value: "userId" },
              ]}
              storageEvent="groupBy"
            />
          </div>
          <div className="flex just-btw text-secoundary align-center">
            Ordering{" "}
            <DropDownButton
              options={[
                { key: "Priority", value: "priority" },
                { key: "Title", value: "title" },
              ]}
              storageEvent="orderBy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
