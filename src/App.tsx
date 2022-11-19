import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainDashboard from "./screens/main";
import NavBar from "./components/navbar";
import { useState } from "react";
import Users from "./screens/users";
import Drivers from "./screens/drivers";
import Payments from "./screens/payments";
import Login from "screens/login";
function App() {
  const [activeTab, setTab] = useState("Dashboard");
  return (
    <Router>
      <div className="App">
        {/* <NavBar active={activeTab} setTab={setTab} /> */}
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
