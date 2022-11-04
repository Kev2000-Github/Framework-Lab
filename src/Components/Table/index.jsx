/* eslint-disable react/no-array-index-key */

import './Table.css';
import dayjs from 'dayjs';
import React, {
  useEffect,
  useState,
} from 'react';
import { generateTableData } from '../../Data/tableMock';
import { Search } from './Search';
import { ArrowDown } from '../SVG/ArrowDown';

const headers = [
  { title: 'ID', name: 'id' },
  { title: 'Vendedor', name: 'seller' },
  { title: 'Cliente', name: 'customer' },
  { title: 'Fecha', name: 'created' },
  { title: 'Total', name: 'total' },
];

const staticSeeder = generateTableData(10);

export function Table() {
  const [data, setData] = useState(staticSeeder);
  const [order, setOrder] = useState({ col: headers[0].name, order: 'DESC' });

  useEffect(() => {
    let sortedData = [...data];
    if (order.order === 'DESC') {
      sortedData = data.sort((a, b) => {
        if (a[order.col] > b[order.col]) return -1;
        if (a[order.col] < b[order.col]) return 1;
        return 0;
      });
    } else {
      sortedData = data.reverse();
    }
    setData([...sortedData]);
  }, [order]);

  const toggleOrder = (currentOrder) => (currentOrder === 'DESC' ? 'ASC' : 'DESC');

  const handleSearch = (e) => {
    if (e.target.value === '') {
      setData(staticSeeder);
    } else {
      const { value } = e.target;
      const filteredData = staticSeeder.filter((item) => (
        item.seller.toLowerCase().includes(value.toLowerCase())
          || item.customer.toLowerCase().includes(value.toLowerCase())
      ));
      setData(filteredData);
    }
  };

  const handleOrder = (e) => {
    const value = e.target.getAttribute('name');
    if (order.col === value) {
      setOrder((prev) => ({ ...prev, order: toggleOrder(prev.order) }));
    } else {
      setOrder({ col: value, order: 'DESC' });
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto'>
        <div className='flex justify-end py-3 pl-2'>
          <div className='flex items-center space-x-2 relative mr-2'>
            <Search onSearch={handleSearch} />
          </div>
        </div>

        <div className='p-1.5 w-full inline-block align-middle'>
          <div className='overflow-hidden border rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  {headers.map((header, i) => {
                    const style = `px-6 py-3 
                    text-left 
                    text-xs 
                    font-medium
                     text-gray-500 
                     uppercase 
                     tracking-wider
                     relative`;
                    const isSelectedCol = order.col === header.name;
                    return (
                      <th
                        key={`${i}-header`}
                        scope='col'
                        name={header.name}
                        className={`
                           colHeader
                           ${style}
                           ${isSelectedCol ? `selectedCol ${order.order}` : ''}
                           `}
                        onClick={handleOrder}
                      >
                        {header.title}
                        {isSelectedCol
                          ? <ArrowDown className={`arrowDown ${order.order}`} />
                          : ''}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {data.map((row, i) => (
                  <tr key={`${i}-tableSeller`}>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {row.id}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {row.seller}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {row.customer}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      {dayjs(row.created).format('DD/MM/YYYY HH:mm')}
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-800 whitespace-nowrap'>
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
}
