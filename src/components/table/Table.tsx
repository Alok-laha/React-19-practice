import type { TableProps } from "../../types/table.types";
import Pagination from "./Pagination";

function Table<T>({ rows, columns, pagination }: TableProps<T>) {

  // helper to resolve nested paths like 'address.street'
  const getNestedValue = (obj: any, path: string | keyof T) => {
    if (obj == null) return undefined;
    if (typeof path !== "string") return obj[path as keyof typeof obj];
    return path
      .split(".")
      .reduce((acc: any, key: string) => (acc ? acc[key] : undefined), obj);
  };

  return (
    <div>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th
                key={String(col.name) + idx}
                className="border border-gray-300"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any) => (
            <tr key={row.id}>
              {columns.map((col, idx) => {
                const value = getNestedValue(row, col.name);
                const cell = col.render
                  ? col.render(value, row)
                  : (value as React.ReactNode);
                return (
                  <td
                    key={`${row.id}-${String(col.name)}-${idx}`}
                    className="border border-gray-300"
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          limit={pagination.limit}
          setPageNumber={pagination.setPageNumber}
          setLimit={pagination.setLimit}
        />
      )}
    </div>
  );
}

export default Table;
