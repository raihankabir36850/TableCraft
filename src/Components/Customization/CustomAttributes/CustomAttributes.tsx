import { useState } from 'react';
import { Title } from '../../Title/Title';
import './CustomAttrbutes.css';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true, tryDate: new Date(2021, 10, 9) },
  { id: 2, name: 'Billi Bob', score: 55, passed: false, tryDate: new Date(2021, 10, 8) },
  { id: 3, name: 'Tom Williams', score: 45, passed: false, tryDate: new Date(2019, 11, 8) },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true, tryDate: new Date(2021, 12, 9) },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true, tryDate: new Date(2019, 11, 12) },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false, tryDate: new Date(2020, 10, 9) },
  { id: 7, name: 'Dick Lee', score: 13, passed: false, tryDate: new Date(2017, 10, 9) },
  { id: 8, name: 'Papa Ricko', score: 73, passed: true, tryDate: new Date(2026, 10, 9) },
  { id: 9, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
  { id: 10, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
  { id: 11, name: 'Mike Wazowski', score: 80, passed: true, tryDate: new Date(2021, 10, 9) },
  { id: 12, name: 'Billi Bob', score: 55, passed: false, tryDate: new Date(2021, 10, 8) },
  { id: 13, name: 'Tom Williams', score: 45, passed: false, tryDate: new Date(2019, 11, 8) },
  { id: 14, name: 'Kurt Cobain', score: 75, passed: true, tryDate: new Date(2021, 12, 9) },
  { id: 15, name: 'Marshall Bruce', score: 77, passed: true, tryDate: new Date(2019, 11, 12) },
  { id: 16, name: 'Sunny Fox', score: 33, passed: false, tryDate: new Date(2020, 10, 9) },
  { id: 17, name: 'Dick Lee', score: 13, passed: false, tryDate: new Date(2017, 10, 9) },
  { id: 18, name: 'Papa Ricko', score: 73, passed: true, tryDate: new Date(2026, 10, 9) },
  { id: 19, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
  { id: 20, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
  { id: 21, name: 'Mike Wazowski', score: 80, passed: true, tryDate: new Date(2021, 10, 9) },
  { id: 22, name: 'Billi Bob', score: 55, passed: false, tryDate: new Date(2021, 10, 8) },
  { id: 23, name: 'Tom Williams', score: 45, passed: false, tryDate: new Date(2019, 11, 8) },
  { id: 24, name: 'Kurt Cobain', score: 75, passed: true, tryDate: new Date(2021, 12, 9) },
  { id: 25, name: 'Marshall Bruce', score: 77, passed: true, tryDate: new Date(2019, 11, 12) },
  { id: 26, name: 'Sunny Fox', score: 33, passed: false, tryDate: new Date(2020, 10, 9) },
  { id: 27, name: 'Dick Lee', score: 13, passed: false, tryDate: new Date(2017, 10, 9) },
  { id: 28, name: 'Papa Ricko', score: 73, passed: true, tryDate: new Date(2026, 10, 9) },
  { id: 29, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
  { id: 30, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
  { id: 31, name: 'Mike Wazowski', score: 80, passed: true, tryDate: new Date(2021, 10, 9) },
  { id: 32, name: 'Billi Bob', score: 55, passed: false, tryDate: new Date(2021, 10, 8) },
  { id: 33, name: 'Tom Williams', score: 45, passed: false, tryDate: new Date(2019, 11, 8) },
  { id: 34, name: 'Kurt Cobain', score: 75, passed: true, tryDate: new Date(2021, 12, 9) },
  { id: 35, name: 'Marshall Bruce', score: 77, passed: true, tryDate: new Date(2019, 11, 12) },
  { id: 36, name: 'Sunny Fox', score: 33, passed: false, tryDate: new Date(2020, 10, 9) },
  { id: 37, name: 'Dick Lee', score: 13, passed: false, tryDate: new Date(2017, 10, 9) },
  { id: 38, name: 'Papa Ricko', score: 73, passed: true, tryDate: new Date(2026, 10, 9) },
  { id: 39, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
  { id: 40, name: 'Treme Watson', score: 61, passed: true, tryDate: new Date(2022, 10, 9) },
];

let curentObject: object = dataArray[0];
for (let i = 0; i < dataArray.length; i++) {
  const objectLength = typeof dataArray[i] === 'object' ? Object.keys(dataArray[i]).length : 0;
  if (objectLength > Object.keys(curentObject).length) {
    curentObject = dataArray[i];
  }
}

export const CustomAttributes = () => {
  const dataLength = dataArray.length;
  const PAGE_PER_SHOW = 5;
  const [active, setActive] = useState(0);
  const [initialRows, setInitialRows] = useState(dataArray.slice(0, PAGE_PER_SHOW));

  const columns = Object.keys(curentObject).filter((item, index) => item !== 'id');

  const columnStructures = columns.map((column, index) => {
    return <th key={index}>{column}</th>;
  });

  const tableCells = initialRows.map((item, index) => {
    return (
      <tr key={item.id} className={item.passed ? 'passed' : 'fail'}>
        {Object.keys(item).map((column, columnIndex) => {
          return column !== 'id' ? (
            <th key={columnIndex}>{column !== 'tryDate' ? item[column].toString() : item[column].toLocaleDateString('en', { month: '2-digit', day: '2-digit', year: 'numeric' }).toString()}</th>
          ) : null;
        })}
      </tr>
    );
  });

  const paginationHandler = (activeNumber: number, Startpage: number, endpage: number) => {
    const newTableCells = [...dataArray].slice(Startpage, endpage);
    setInitialRows(newTableCells);
    setActive(activeNumber);
  };

  const paginationStr = dataArray.slice(0, dataLength / PAGE_PER_SHOW).map((item, index) => {
    return (
      <button key={index} className={index == active ? 'active' : null} onClick={() => paginationHandler(index, index * PAGE_PER_SHOW, PAGE_PER_SHOW * (index + 1))}>
        {index + 1}
      </button>
    );
  });

  return (
    <div>
      <Title title='Custom Attributes' />
      <table>
        <thead>
          <tr>{columnStructures}</tr>
        </thead>
        <tbody>{tableCells}</tbody>
      </table>
      <div className='pagination'>{paginationStr}</div>
    </div>
  );
};
