// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'

function App() {
  return (
    <div>
      <header>
        <h1>HRnet</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Employee</Link>
            </li>
            <li>
              <Link to="/employees">Employee List</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </div>
  )
}

export default App
