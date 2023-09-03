import { useState } from 'react';
export const ColumnStructure = ({ ROW, columnsArray, tableCells }) => {
  console.log(columnsArray, 'agian');

  const columnStr = columnsArray.map((x, index) =>
    x.checked === true ? (
      <th key={index} id={`column-${index}`}>
        column : {index}
      </th>
    ) : null
  );

  console.log(tableCells, 'columnStructure');
  const tablecellStructure = tableCells.map((_, index) => {
    return (
      <tr key={index} id={`row-${index}`}>
        {_.map((__: boolean, childIndex: number) => {
          __ == true ? (
            <th key={childIndex} id={`column-${childIndex}`}>
              <input value={`column ${childIndex}: row: ${index}`} type='text' />
            </th>
          ) : null;
        })}
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>{columnStr}</tr>
        </thead>
        <tbody>{tablecellStructure}</tbody>
      </table>
    </div>
  );
};
