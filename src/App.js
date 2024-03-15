import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/products/manage" Component={ManageProducts} />
        <Route path="/orders/manage" Component={ManageOrders} />
      </Routes>
    </div>
  );
}

export default App;
