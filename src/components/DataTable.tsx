import React from "react";

interface TableColumn<T> {
  key: keyof T;
  label: string;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

function DataTable<T extends { id: number | string }>({
  data,
  columns,
  onEdit,
  onDelete,
}: TableProps<T>) {
  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col) => (
            <th key={col.key as string} className="border px-4 py-2">
              {col.label}
            </th>
          ))}
          {(onEdit || onDelete) && (
            <th className="border px-4 py-2">Acciones</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border">
            {columns.map((col) => (
              <td key={col.key as string} className="border px-4 py-2">
                {item[col.key] as React.ReactNode}
              </td>
            ))}
            {(onEdit || onDelete) && (
              <td className=" px-4 py-2 flex gap-2">
                {onEdit && (
                  <button
                    onClick={() => onEdit(item)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Editar
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={() => onDelete(item)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Eliminar
                  </button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
