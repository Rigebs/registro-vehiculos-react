import { useState } from "react";

interface Vehiculo {
  id: number;
  placa: string;
  marca: string;
  modelo: string;
}

const vehiculosIniciales: Vehiculo[] = [
  { id: 1, placa: "ABC123", marca: "Toyota", modelo: "Corolla" },
  { id: 2, placa: "XYZ789", marca: "Honda", modelo: "Civic" },
];

export default function Home() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>(vehiculosIniciales);

  const [busqueda, setBusqueda] = useState("");

  const vehiculosFiltrados = vehiculos.filter((v) =>
    v.placa.toLowerCase().includes(busqueda.toLowerCase())
  );

  const eliminarVehiculo = (id: number) => {
    setVehiculos(vehiculos.filter((v) => v.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Vehículos</h2>

      <input
        type="text"
        placeholder="Buscar por placa..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Placa</th>
            <th className="border p-2">Marca</th>
            <th className="border p-2">Modelo</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculosFiltrados.length > 0 ? (
            vehiculosFiltrados.map((vehiculo) => (
              <tr key={vehiculo.id}>
                <td className="border p-2">{vehiculo.placa}</td>
                <td className="border p-2">{vehiculo.marca}</td>
                <td className="border p-2">{vehiculo.modelo}</td>
                <td className="border p-2">
                  <button
                    onClick={() => eliminarVehiculo(vehiculo.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="border p-2 text-center">
                No hay vehículos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
