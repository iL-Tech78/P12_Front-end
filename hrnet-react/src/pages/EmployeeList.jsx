import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import "./EmployeeList.css";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.list);

  const columns = [
    { header: "First Name", accessor: "firstName" },
    { header: "Last Name", accessor: "lastName" },
    { header: "Start Date", accessor: "startDate" },
    { header: "Department", accessor: "department" },
    { header: "Date of Birth", accessor: "dateOfBirth" },
    { header: "Street", accessor: "street" },
    { header: "City", accessor: "city" },
    { header: "State", accessor: "state" },
    { header: "Zip Code", accessor: "zipCode" },
  ];

  return (
    <main className="employees-page">
      <header className="employees-header">
        <h1 className="employees-title">Current Employees</h1>
      </header>

      <section className="employees-card">
        <DataTable data={employees} columns={columns} initialPageSize={10} />
      </section>

      <div className="employees-footer">
        <Link to="/" className="employees-home-link">
          Home
        </Link>
      </div>
    </main>
  );
}
