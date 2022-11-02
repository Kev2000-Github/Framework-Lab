/* eslint-disable jsx-a11y/anchor-is-valid */
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { generateTableData } from "../../Data/tableMock";
import { Order } from "./Order";
import { Search } from "./Search";

const headers = [
  { title: "ID" },
  { title: "Vendedor" },
  { title: "Cliente" },
  { title: "Fecha" },
  { title: "Total" },
];

const staticSeeder = generateTableData(10);

export const Table = () => {
  const [data, setData] = useState(staticSeeder);

  useEffect(() => {
  }, [data]);
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setData(staticSeeder);
    } else {
      const value = e.target.value;
      const filteredData = data.filter((item) => {
        return (
          item.seller.toLowerCase().includes(value.toLowerCase()) ||
          item.customer.toLowerCase().includes(value.toLowerCase())
        );
      });
      setData(filteredData);
    }
  };
  const handleOrder = (e) => {
    const value = e;
    if (value === "asc") {
      const sortedData = data.sort((a, b) => {
        return a.created - b.created;
      });
      setData([ ...sortedData]);
    }
    if (value === "desc") {
      const sortedData = data.sort((a, b) => {
        return b.created - a.created;
      });
      
      setData([...sortedData]);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="flex justify-end py-3 pl-2">
          <div className="flex items-center space-x-2">
            <div>
              <Search onSearch={handleSearch} />
            </div>
            <div className="relative">
              <Order onOrder={handleOrder} />
            </div>
          </div>
        </div>

        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((header, i) => (
                    <th
                      key={i + "-header"}
                      scope="col"
                      className="px-6 py-3 
                        text-left 
                        text-xs 
                        font-medium
                         text-gray-500 
                         uppercase 
                         tracking-wider"
                    >
                      {header.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((row, i) => (
                  <tr key={i + "-tableSeller"}>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {row.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {row.seller}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {row.customer}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {dayjs(row.created).format("DD/MM/YYYY HH:mm")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
