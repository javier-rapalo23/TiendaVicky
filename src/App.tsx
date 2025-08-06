import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./screens/HomeScreen";
import InventoryPage from "./screens/InventarioScreen";
import FacturacionScreen from "./screens/FacturacionScreen.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/FacturacionScreen" element={<FacturacionScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
