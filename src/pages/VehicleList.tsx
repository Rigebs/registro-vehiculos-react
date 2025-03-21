import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Vehicle } from "../types/Vehicle";
import DataTable from "../components/DataTable";
import { vehicleService } from "../services/VehicleService";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setVehicles(vehicleService.getVehicles());
  }, []);

  const handleDelete = (vehicle: Vehicle) => {
    vehicleService.deleteVehicle(vehicle.id);
    setVehicles(vehicleService.getVehicles());
  };

  const handleEdit = (vehicle: Vehicle) => {
    navigate(`/edit/${vehicle.id}`);
  };

  const columns: { key: keyof Vehicle; label: string }[] = [
    { key: "placa", label: "Placa" },
    { key: "marca", label: "Marca" },
    { key: "modelo", label: "Modelo" },
  ];

  return (
    <div>
      <h1>Lista de Vehículos</h1>
      <Link to="/new">
        <button>Agregar Vehículo</button>
      </Link>

      <div className="mt-4">
        <DataTable
          data={vehicles}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default VehicleList;
