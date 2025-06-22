import React from 'react'

function OrderTable({ ths, tds }) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          
          {/* Table Head */}
          <thead className="text-left bg-gray-100">
            <tr>
              {ths.map((th, index) => (
                <th key={index} className="px-3 py-2 whitespace-nowrap font-medium text-gray-900">
                  {th}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {tds.map((row, rowIndex) => (
              <tr key={rowIndex} className="*:text-gray-900 *:first:font-medium">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 whitespace-nowrap">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default OrderTable
