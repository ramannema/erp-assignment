import React, { useState } from "react";
import Button from "./Button";
import { stringToColor } from "../../utils/helpers";

const Table = ({ headers, data, QuickActions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const headerKeys = Object.keys(headers);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  function getColumnData(key, row) {
    if (key === "image")
      return (
        <img
          src={row[key]}
          alt={row?.name ?? `image-${row.id}`}
          className="max-w-[100px]"
        />
      );

    if (key === "category" || key === "status") {
      const bgColor = stringToColor(row[key]);
      return (
        <div
          className="rounded-lg py-1 px-4 w-fit font-medium text-gray-800"
          style={{ background: `${bgColor}33` }}
        >
          {row[key]}
        </div>
      );
    }

    if (key === "price") return `$${row[key]}`;

    if (key === "quickActions") return <QuickActions id={row.id} />;
    return row[key];
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="shadow-sm my-8 rounded-md overflow-x-auto ">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-slate-100">
          <tr>
            {headerKeys.map((key) => (
              <th
                key={key}
                className="border border-black-100 font-semibold text-left p-4"
              >
                {headers[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              {headerKeys.map((key) => (
                <td key={`${key}-${row.id}`} className="border text-left p-4">
                  {getColumnData(key, row)}
                </td>
              ))}
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-end gap-2 my-4">
        <Button
          onClick={prevPage}
          className="bg-transparent text-indigo-700 border-indigo-700 border-2"
        >
          &lt;
        </Button>
        {[...Array(Math.ceil(data.length / rowsPerPage)).keys()].map(
          (pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => paginate(pageNumber + 1)}
              className="bg-transparent text-indigo-700 border-indigo-700 border-2"
            >
              {pageNumber + 1}
            </Button>
          )
        )}
        <Button
          onClick={nextPage}
          className="bg-transparent text-indigo-700 border-indigo-700 border-2"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Table;
