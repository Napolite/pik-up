import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainDashboard from "./screens/main";
import NavBar from "./components/navbar";
import { useState } from "react";
import Users from "./screens/users";
import Drivers from "./screens/drivers";
import Payments from "./screens/payments";
import Login from "screens/login";
import Tracking from "screens/tracking";
function App() {
  const [activeTab, setTab] = useState("Dashboard");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/users" element={<Users />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
