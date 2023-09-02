import { ChangeEvent, useState } from 'react';
import { Title } from '../Title/Title';
export const ColumnReOrdering = () => {
  const row = 9;
  const column = 4;
  const [primaryArray, setPrimaryArray] = useState([]);
  const [columnArray, setColumnArray] = useState(Array(column).fill(''));

  const generalFunction = () => {
    columnArray[parseInt(primaryArray[0].id)] = primaryArray[primaryArray.length - 1].value;
    columnArray[parseInt(primaryArray[primaryArray.length - 1].id)] = primaryArray[0].value;
    setColumnArray(columnArray);
  };

  const dragEnterHandler = (_e: ChangeEvent<HTMLInputElement>) => {
    primaryArray.push({
      id: _e.target.id,
      value: _e.target.dataset.table,
    });
  };

  const dragEndHandler = () => {
    // eslint-disable-next-line no-constant-condition
    if (primaryArray.length >= 2 && primaryArray[primaryArray.length - 1] !== primaryArray[0]) {
      generalFunction();
      setPrimaryArray([]);
    }
  };

  console.log('columnArray', columnArray);

  const columnStr = columnArray.map((x, index) => {
    return (
      <th key={index} id={index} data-table={x !== '' ? x : index} draggable='true' onDragEnter={(e) => dragEnterHandler(e)} onDragEnd={() => dragEndHandler()}>
        column : {x !== '' ? x : index}
      </th>
    );
  });

  const tablecells = Array(row)
    .fill('')
    .map((_, index) => {
      return (
        <tr key={index} id={`row-${index}`}>
          {columnArray.map((__, childIndex) => (
            <th key={childIndex} id={`column-${childIndex}`}>
              {`column ${__ !== '' ? __ : childIndex}: row: ${index}`}
            </th>
          ))}
        </tr>
      );
    });

  return (
    <div>
      <Title title='Columns -> Column ReOrdering' />
      <table>
        <thead>
          <tr>{columnStr}</tr>
        </thead>
        <tbody>{tablecells}</tbody>
      </table>
    </div>
  );
};
