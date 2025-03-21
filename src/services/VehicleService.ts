import { Vehicle } from "../types/Vehicle";

const STORAGE_KEY = "vehicles";

class VehicleService {
  getVehicles(): Vehicle[] {
    const storedVehicles = localStorage.getItem(STORAGE_KEY);
    return storedVehicles ? JSON.parse(storedVehicles) : [];
  }

  getVehicleById(id: string): Vehicle | null {
    return this.getVehicles().find((v) => v.id === id) || null;
  }

  addVehicle(vehicle: Vehicle): void {
    const vehicles = this.getVehicles();
    vehicles.push(vehicle);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
  }

  updateVehicle(updatedVehicle: Vehicle): void {
    const vehicles = this.getVehicles().map((v) =>
      v.id === updatedVehicle.id ? updatedVehicle : v
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
  }

  deleteVehicle(id: string): void {
    const vehicles = this.getVehicles().filter((v) => v.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
  }
}

export const vehicleService = new VehicleService();
