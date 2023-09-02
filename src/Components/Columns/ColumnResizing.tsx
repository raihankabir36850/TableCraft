/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './ColumnResizing.css';
import { Title } from '../Title/Title';

export const ColumnResizing = () => {
  const row = 9;
  const column = 4;

  const columnStr = Array(column)
    .fill('')
    .map((x, index) => (
      <th key={index} id={`column-${index}`}>
        column : {index}
      </th>
    ));

  const tablecells = Array(row)
    .fill('')
    .map((_, index) => {
      return (
        <tr key={index} id={`row-${index}`}>
          {Array(column)
            .fill('')
            .map((__, childIndex) => (
              <th key={childIndex} id={`column-${childIndex}`}>
                {`column ${childIndex}: row: ${index}`}
              </th>
            ))}
        </tr>
      );
    });

  return (
    <div>
      <Title title='Columns --> Column Resizing' />
      <table>
        <thead>
          <tr>{columnStr}</tr>
        </thead>
        <tbody>{tablecells}</tbody>
      </table>
    </div>
  );
};
