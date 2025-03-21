import { useEffect, useState } from "react";
import { Vehicle } from "../types/Vehicle";
import { vehicleService } from "../services/VehicleService";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    setVehicles(vehicleService.getVehicles());
  }, []);

  const add = (vehicle: Vehicle) => {
    vehicleService.addVehicle(vehicle);
    setVehicles(vehicleService.getVehicles());
  };

  const update = (updatedVehicle: Vehicle) => {
    vehicleService.updateVehicle(updatedVehicle);
    setVehicles(vehicleService.getVehicles());
  };

  const remove = (id: string) => {
    vehicleService.deleteVehicle(id);
    setVehicles(vehicleService.getVehicles());
  };

  return { vehicles, add, update, remove };
};
