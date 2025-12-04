import { useState, useMemo } from "react";
import "./DataTable.css";

export default function DataTable({ data, columns, initialPageSize = 10 }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    const lower = searchTerm.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const value = row[col.accessor];
        if (value === undefined || value === null) return false;
        return String(value).toLowerCase().includes(lower);
      })
    );
  }, [data, columns, searchTerm]);

  const totalEntries = filteredData.length;
  const totalPages = totalEntries === 0 ? 1 : Math.ceil(totalEntries / pageSize);

  const safeCurrentPage =
    currentPage > totalPages ? totalPages : currentPage < 1 ? 1 : currentPage;

  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalEntries);
  const currentRows = filteredData.slice(startIndex, endIndex);

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    setCurrentPage((p) => (p > 1 ? p - 1 : p));
  };

  const handleNext = () => {
    setCurrentPage((p) => (p < totalPages ? p + 1 : p));
  };

  return (
    <div className="datatable-container">
      {/* Top bar */}
      <div className="datatable-top">
        <div className="datatable-show">
          Show{" "}
          <select value={pageSize} onChange={handlePageSizeChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>{" "}
          entries
        </div>

        <div className="datatable-search">
          Search:{" "}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Table */}
      <table className="datatable-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentRows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="datatable-empty">
                No data available in table
              </td>
            </tr>
          ) : (
            currentRows.map((row, index) => (
              <tr key={index}>
                {columns.map((col) => (
                  <td key={col.accessor}>{row[col.accessor]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Footer */}
      <div className="datatable-footer">
        <div>
          Showing{" "}
          {totalEntries === 0
            ? "0 to 0"
            : `${startIndex + 1} to ${endIndex}`}{" "}
          of {totalEntries} entries
        </div>

        <div className="datatable-pagination">
          <button onClick={handlePrevious} disabled={safeCurrentPage <= 1}>
            Previous
          </button>

          <span>{safeCurrentPage}</span>

          <button onClick={handleNext} disabled={safeCurrentPage >= totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
