/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from 'react';
import { Title } from '../Title/Title';
import { UpArrow } from '../UpArrow';
import { DownArrow } from '../DownArrow';
import './ClassComponent.css';

export const ClassComponent = () => {
  const row = 30;
  const column = 100;
  const generalArray = Array(row)
    .fill('')
    .map((x, index) => {
      return Array(column)
        .fill('')
        .map((_x, ChildIndex) => `column: ${ChildIndex} row: ${index}`);
    });
  const [showUptick, setshowUptick] = useState(false);
  const [showDowntick, setshowDowntick] = useState(false);
  const [columnNum, setcolumnNum] = useState(100);
  const [primaryArray, setprimaryArray] = useState(generalArray);

  const columnHandler = (columnNumber: number) => {
    setcolumnNum((prev: number) => {
      if (prev === columnNumber) {
        if (!showUptick && !showDowntick) {
          setshowUptick((prev: boolean) => !prev);
        }

        if (showUptick && !showDowntick) {
          setshowUptick((prev: boolean) => !prev);
          setshowDowntick((prev: boolean) => !prev);
        }

        if (!showUptick && showDowntick) {
          setshowUptick((prev: boolean) => !prev);
          setshowDowntick((prev: boolean) => !prev);
        }
      } else {
        setshowUptick((prev: boolean) => (prev = true));
        setshowDowntick((prev: boolean) => (prev = false));
      }

      return (prev = columnNumber);
    });
  };
  const tableCellChange = (_e: ChangeEvent<HTMLInputElement>, _index: number, childIndex: number) => {
    console.log('cell chnage', `${childIndex}X${_index}`);
    const modifiedArray = [...primaryArray];
    modifiedArray[_index][childIndex] = _e.target.value;
    setprimaryArray(modifiedArray);
  };

  const columnStr = Array(column)
    .fill('')
    .map((x, index) => (
      <th key={index} id={`column-${index}`}>
        <span onClick={() => columnHandler(index)}>column : {index}</span>
        {showUptick && columnNum === index ? <UpArrow /> : null}
        {showDowntick && columnNum === index ? <DownArrow /> : null}
      </th>
    ));

  const tablecells = primaryArray.map((_, index) => {
    return (
      <tr key={index} id={`row-${index}`}>
        {_.map((__, childIndex) => {
          return (
            <th key={childIndex} id={`column-${childIndex}`}>
              <input value={__} type='text' onChange={(e) => tableCellChange(e, index, childIndex)} />
            </th>
          );
        })}
      </tr>
    );
  });

  return (
    <div>
      <Title title='Class Components' />
      <div className='table_class_component'>
        <table>
          <thead>
            <tr>{columnStr}</tr>
          </thead>
          <tbody>
            {!showUptick && !showDowntick && tablecells}
            {showUptick && !showDowntick && tablecells}
            {!showUptick && showDowntick && tablecells && tablecells.reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
};
