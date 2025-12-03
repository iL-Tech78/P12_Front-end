import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.list);

  const columns = [
    "First Name",
    "Last Name",
    "Start Date",
    "Department",
    "Date of Birth",
    "Street",
    "City",
    "State",
    "Zip Code",
  ];

  return (
    <main style={{ maxWidth: "90%", margin: "2rem auto" }}>
      <h1 style={{ textAlign: "center" }}>Current Employees</h1>

      {/* Barre du haut : Show X entries / Search (visuel seulement pour l'instant) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <div>
          Show{" "}
          <select defaultValue="10">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>{" "}
          entries
        </div>

        <div>
          Search:{" "}
          <input
            type="text"
            placeholder="Search (coming soon)"
            style={{ padding: "2px 4px" }}
            disabled
          />
        </div>
      </div>

      {/* Tableau des employés */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ccc",
        }}
      >
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                style={{ textAlign: "center", padding: "1rem" }}
              >
                No data available in table
              </td>
            </tr>
          ) : (
            employees.map((emp, index) => (
              <tr key={index}>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.firstName}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.lastName}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.startDate}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.department}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.dateOfBirth}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.street}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.city}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.state}
                </td>
                <td style={{ padding: "6px", borderBottom: "1px solid #eee" }}>
                  {emp.zipCode}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Footer tableau */}
      <div style={{ marginTop: "1rem" }}>
        Showing {employees.length} to {employees.length} of {employees.length}{" "}
        entries
      </div>

      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}
