import "./App.css";
import { Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import RolePage from "./pages/RolePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/role/:roleName" element={<RolePage />} />
    </Routes>
  );
}

export default App;
