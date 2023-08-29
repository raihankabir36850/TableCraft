import { ChangeEvent, useState } from 'react';
import { Title } from '../Title/Title';
export const ColumnReOrdering = () => {
  const row = 9;
  const column = 4;
  const [primaryArray, setPrimaryArray] = useState([]);
  const [columnArray, setColumnArray] = useState(Array(column).fill(''));
  const [fromArray, setFromArray] = useState();
  const [toArray, setToArray] = useState();
  const events: (EventTarget & HTMLInputElement)[] = [];

  const generalFunction = () => {
    console.log('finished', events, primaryArray);

    // const from = primaryArray[0];
    // const to = primaryArray[primaryArray.length - 1];
    // modifiedArray[from] = to;
    // modifiedArray[to] = from;
    // setFromArray(from);
    // setToArray(to);
    // setColumnArray(modifiedArray);
    setPrimaryArray([primaryArray[0], primaryArray[primaryArray.length - 1]]);
  };

  const dragEnterHandler = (_e: ChangeEvent<HTMLInputElement>) => {
    primaryArray.push(_e.target.id);
  };

  const dragEndHandler = (_e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-constant-condition
    if (primaryArray.length >= 2 && primaryArray[primaryArray.length - 1] !== primaryArray[0]) {
      generalFunction();
    }
  };

  const columnStr = Array(column)
    .fill('')
    .map((x, index) => {
      console.log(primaryArray, 'primaryArray');
      const similar = primaryArray.length && primaryArray.find((item, _index) => index == parseInt(item));

      if (similar) {
        console.log(similar, 'similar');

        return (
          <th key={index} id={index} draggable='true' onDragEnter={(e) => dragEnterHandler(e)} onDragEnd={(e) => dragEndHandler(e)}>
            column : {similar}
          </th>
        );
      } else {
        return (
          <th key={index} id={index} draggable='true' onDragEnter={(e) => dragEnterHandler(e)} onDragEnd={(e) => dragEndHandler(e)}>
            column : {index}
          </th>
        );
      }
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
