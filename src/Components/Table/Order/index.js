import React, { useState } from "react";

const order = [
  { id: "desc", value: "Descendente" },
  { id: "asc", value: "Ascendente" },
];
export const Order = ({ onOrder }) => {
  const [selectedOrderBy, setSelectedOrderBy] = useState(order[1]);

  const handleChangeOrderBy = (e) => {
    const value = order.find((item) => item.id === e.target.value);
    setSelectedOrderBy(value);

    onOrder(value.id);
  };

  return (
    <>
      <select
        defaultChecked={selectedOrderBy.id}
        id="large"
        onChange={handleChangeOrderBy}
        className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {order.map((item, i) => (
          <option key={i + "-orderby"} value={item.id}>
            {item.value}
          </option>
        ))}
      </select>
    </>
  );
};
