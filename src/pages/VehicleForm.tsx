import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Vehicle } from "../types/Vehicle";
import { vehicleService } from "../services/VehicleService";

const VehicleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Vehicle>({
    id: "",
    placa: "",
    marca: "",
    modelo: "",
  });

  useEffect(() => {
    if (id) {
      const vehicleToEdit = vehicleService.getVehicleById(id);
      if (vehicleToEdit) setFormData(vehicleToEdit);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (id) {
      vehicleService.updateVehicle(formData);
    } else {
      formData.id = crypto.randomUUID();
      vehicleService.addVehicle(formData);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Editar Vehículo" : "Registrar Vehículo"}</h2>
      <input
        type="text"
        name="placa"
        placeholder="Placa"
        value={formData.placa}
        onChange={handleChange}
      />
      <input
        type="text"
        name="marca"
        placeholder="Marca"
        value={formData.marca}
        onChange={handleChange}
      />
      <input
        type="text"
        name="modelo"
        placeholder="Modelo"
        value={formData.modelo}
        onChange={handleChange}
      />
      <button type="submit">
        {id ? "Actualizar Vehículo" : "Registrar Vehículo"}
      </button>
    </form>
  );
};

export default VehicleForm;
