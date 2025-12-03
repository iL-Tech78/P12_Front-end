import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employees/employeesSlice";
import { states } from "../data/states";
import { departments } from "../data/departments";
import { Link } from "react-router-dom";

export default function CreateEmployee() {
  const dispatch = useDispatch();

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setStateValue] = useState(states[0].name);
  const [zipCode, setZipCode] = useState("");

  const [department, setDepartment] = useState(departments[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    dispatch(addEmployee(newEmployee));

    // Ici, plus tard, tu ouvriras ta MODAL React
    alert("Employee Created! (modal à venir)");
  };

  return (
    <main style={{ maxWidth: "500px", margin: "auto" }}>
        <h1>HRnet</h1>
        <p> <Link to="/employees">View Current Employees</Link></p>
        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit}>

        <label>First Name</label>
        <input 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name</label>
        <input 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />

        <label>Date of Birth</label>
        <input 
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <label>Start Date</label>
        <input 
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
        />

        <fieldset>
            <legend>Address</legend>

            <label>Street</label>
            <input 
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            />

            <label>City</label>
            <input 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />

            <label>State</label>
            <select 
            value={state}
            onChange={(e) => setStateValue(e.target.value)}
            >
            {states.map((s) => (
                <option key={s.abbreviation} value={s.name}>
                {s.name}
                </option>
            ))}
            </select>

            <label>Zip Code</label>
            <input 
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            />
        </fieldset>

        <label>Department</label>
        <select 
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
        >
            {departments.map((d) => (
            <option key={d} value={d}>
                {d}
            </option>
            ))}
        </select>

        <button type="submit" style={{ marginTop: "20px" }}>Save</button>

        </form>
    </main>
  );
}
