import { ChangeEvent, useState } from 'react';
import { Title } from '../Title/Title';
export const ColumnReOrdering = () => {
  const row = 9;
  const column = 4;
  const [primaryArray, setPrimaryArray] = useState([]);
  const [columnArray, setColumnArray] = useState(Array(column).fill(''));
  const [fromArray, setFromArray] = useState();
  const [toArray, setToArray] = useState();

  const generalFunction = () => {
    console.log('finished', primaryArray);

    const firstEl = parseInt(primaryArray[0].value);
    const firstElValue = parseInt(primaryArray[0].id);
    const secondEl = parseInt(primaryArray[primaryArray.length - 1].value);
    const secondElValue = parseInt(primaryArray[primaryArray.length - 1].id);

    if (firstEl < secondEl || (firstEl == firstElValue && secondEl == secondElValue)) {
      console.log('if');
      columnArray[parseInt(primaryArray[0].id)] = primaryArray[primaryArray.length - 1].value;
      columnArray[parseInt(primaryArray[primaryArray.length - 1].id)] = primaryArray[0].value;
    } else {
      console.log('else');
      columnArray[parseInt(primaryArray[0].id)] = primaryArray[0].value;
      columnArray[parseInt(primaryArray[primaryArray.length - 1].id)] = primaryArray[primaryArray.length - 1].value;
    }

    console.log('first', columnArray);
    setColumnArray(columnArray);
  };

  const dragEnterHandler = (_e: ChangeEvent<HTMLInputElement>) => {
    // if (_e.target.dataset.table !== '') {
    //   primaryArray.push(_e.target.dataset.table);
    // }

    primaryArray.push({
      id: _e.target.id,
      value: _e.target.dataset.table,
    });
  };

  const dragEndHandler = (_e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-constant-condition
    if (primaryArray.length >= 2 && primaryArray[primaryArray.length - 1] !== primaryArray[0]) {
      generalFunction();
      setPrimaryArray([]);
    }
  };

  console.log('columnArray', columnArray);

  const columnStr = columnArray.map((x, index) => {
    return (
      <th key={index} id={index} data-table={x !== '' ? x : index} draggable='true' onDragEnter={(e) => dragEnterHandler(e)} onDragEnd={(e) => dragEndHandler(e)}>
        column : {x !== '' ? x : index}
      </th>
    );
  });

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
