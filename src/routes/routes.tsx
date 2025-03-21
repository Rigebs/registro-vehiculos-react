import { BrowserRouter, Route, Routes } from "react-router-dom";
import VehicleForm from "../pages/VehicleForm";
import VehicleList from "../pages/VehicleList";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/new" element={<VehicleForm />} />
        <Route path="/edit/:id" element={<VehicleForm />} />
      </Routes>
    </BrowserRouter>
  );
}
