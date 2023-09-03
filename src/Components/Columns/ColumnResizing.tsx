/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ChangeEvent } from 'react';
import './ColumnResizing.css';
import { Title } from '../Title/Title';

export const ColumnResizing = () => {
  const row = 9;
  const column = 4;

  const columnStr = Array(column)
    .fill('')
    .map((x, index) => (
      <th key={index} id={`column-${index}`}>
        <span>column : {index}</span>
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
                <span>
                  <span>{`column ${childIndex}: row: ${index}`}</span>
                </span>
              </th>
            ))}
        </tr>
      );
    });

  return (
    <div>
      <Title title='Columns --> Column Resizing' />
      <div className='table_container'>
        <table>
          <thead>
            <tr>{columnStr}</tr>
          </thead>
          <tbody>{tablecells}</tbody>
        </table>
      </div>
    </div>
  );
};
