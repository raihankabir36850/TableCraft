import { useState } from 'react';
import { Title } from '../../Title/Title';
import { UpArrow } from '../../UpArrow';
import { DownArrow } from '../../DownArrow';
import { helperFunction } from '../../../Utlis/helper';
import './CustomAttrbutes.css';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true, date: new Date(2021, 10, 9) },
  { id: 2, name: 'Billi Bob', score: 55, passed: false, date: new Date(2021, 10, 8) },
  { id: 3, name: 'Tom Williams', score: 45, passed: false, date: new Date(2019, 11, 8) },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true, date: new Date(2021, 12, 9) },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true, date: new Date(2019, 11, 12) },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false, date: new Date(2020, 10, 9) },
  { id: 7, name: 'Dick Lee', score: 13, passed: false, date: new Date(2017, 10, 9) },
  { id: 8, name: 'Papa Ricko', score: 73, passed: true, date: new Date(2026, 10, 9) },
  { id: 9, name: 'Treme Watson', score: 61, passed: true, date: new Date(2022, 10, 9) },
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
  const PAGE_PER_SHOW = 7;
  const [showUptick, setshowUptick] = useState(false);
  const [showDowntick, setshowDowntick] = useState(false);
  const [columnNum, setcolumnNum] = useState(100);
  const [active, setActive] = useState(0);
  const [initialRows, setInitialRows] = useState(dataArray.slice(0, PAGE_PER_SHOW));

  // neglect id property of date array
  const columns = Object.keys(curentObject).filter((item, index) => item !== 'id');

  const columnHandler = (columnName: string, columnNumber: Number) => {
    console.log(columnName, 'columnName');
    setcolumnNum((prev: number) => {
      if (prev === columnNumber) {
        if (!showUptick && !showDowntick) {
          console.log('show uptick');
          helperFunction(columnName, columnNumber, setInitialRows);

          setshowUptick((prev: boolean) => !prev);
        }

        if (showUptick && !showDowntick) {
          console.log('show downtick');
          helperFunction(columnName, columnNumber, setInitialRows);

          setshowUptick((prev: boolean) => !prev);
          setshowDowntick((prev: boolean) => !prev);
        }

        if (!showUptick && showDowntick) {
          console.log('show uptick');
          helperFunction(columnName, columnNumber, setInitialRows);

          setshowUptick((prev: boolean) => !prev);
          setshowDowntick((prev: boolean) => !prev);
        }
      } else {
        console.log('show uptick');
        helperFunction(columnName, columnNumber, setInitialRows);

        setshowUptick((prev: boolean) => (prev = true));
        setshowDowntick((prev: boolean) => (prev = false));
      }

      return (prev = columnNumber);
    });
  };

  const columnStructures = columns.map((column, index) => {
    return (
      <th key={index}>
        <span onClick={() => columnHandler(column, index)}>{column}</span>
        {showUptick && columnNum === index ? <UpArrow /> : null}
        {showDowntick && columnNum === index ? <DownArrow /> : null}
      </th>
    );
  });

  const tableCells = initialRows.map((item, index) => {
    return (
      <tr key={item.id} className={item.passed ? 'passed' : 'fail'}>
        {Object.keys(item).map((column, columnIndex) => {
          return column !== 'id' ? (
            <th key={columnIndex}>{column !== 'date' ? item[column].toString() : item[column].toLocaleDateString('en', { month: '2-digit', day: '2-digit', year: 'numeric' }).toString()}</th>
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

  const paginationStr = dataArray.slice(0, Math.ceil(dataLength / PAGE_PER_SHOW)).map((item, index) => {
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
