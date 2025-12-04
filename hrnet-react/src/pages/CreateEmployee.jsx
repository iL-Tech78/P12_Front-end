import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addEmployee } from "../features/employees/employeesSlice";
import { states } from "../data/states";
import { departments } from "../data/departments";
import Modal from "react-hrnet-modal";
import Dropdown from "../components/Dropdown";
import DatePicker from "../components/DatePicker";
import "./CreateEmployee.css";

export default function CreateEmployee() {
  const dispatch = useDispatch();

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  return (
    <main className="create-page">
      <header className="create-header">
        <h1 className="create-title">HRnet</h1>
        <Link to="/employees" className="create-link">
          View Current Employees
        </Link>
      </header>

      <section className="create-card">
        <h2 className="create-card-title">Create Employee</h2>

        <form className="create-form" onSubmit={handleSubmit}>
          <div className="create-grid">
            <div className="create-column">
              <div className="form-group">
                <label>First Name</label>
                <input
                  className="text-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  className="text-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <DatePicker
                  label="Date of Birth"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={setDateOfBirth}
                />
              </div>

              <div className="form-group">
                <DatePicker
                  label="Start Date"
                  name="startDate"
                  value={startDate}
                  onChange={setStartDate}
                />
              </div>
            </div>

            <div className="create-column">
              <fieldset className="address-fieldset">
                <legend>Address</legend>

                <div className="form-group">
                  <label>Street</label>
                  <input
                    className="text-input"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>City</label>
                  <input
                    className="text-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <Dropdown
                    label="State"
                    options={states.map((s) => s.name)}
                    value={state}
                    onChange={setStateValue}
                  />
                </div>

                <div className="form-group">
                  <label>Zip Code</label>
                  <input
                    className="text-input"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <div className="form-group">
            <Dropdown
              label="Department"
              options={departments}
              value={department}
              onChange={setDepartment}
            />
          </div>

          <div className="create-actions">
            <button type="submit" className="create-submit">
              Save
            </button>
          </div>
        </form>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        Employee Created!
      </Modal>
    </main>
  );
}
