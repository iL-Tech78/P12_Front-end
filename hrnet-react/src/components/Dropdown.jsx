import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";

export default function Dropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}

      <div
        className={`dropdown-select ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        ref={dropdownRef}
      >
        <span>{value || "Select an option"}</span>
        <span className="dropdown-arrow">▾</span>
      </div>

      {open && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <div
              key={opt}
              className="dropdown-item"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
