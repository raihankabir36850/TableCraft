/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Title } from '../Title/Title';
import { UpArrow } from '../UpArrow';
import { DownArrow } from '../DownArrow';
import './Basic.css';

export const Basic = () => {
  const row = 9;
  const column = 4;
  const [showUptick, setshowUptick] = useState(false);
  const [showDowntick, setshowDowntick] = useState(false);
  const [columnNum, setcolumnNum] = useState(100);

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

  const columnStr = Array(column)
    .fill('')
    .map((x, index) => (
      <th key={index} id={`column-${index}`}>
        <span onClick={() => columnHandler(index)}>column : {index}</span>
        {showUptick && columnNum === index ? <UpArrow /> : null}
        {showDowntick && columnNum === index ? <DownArrow /> : null}
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
      <Title title='Basics' />
      <table>
        <thead>
          <tr>{columnStr}</tr>
        </thead>
        <tbody>
          {!showUptick && !showDowntick && tablecells}
          {showUptick && !showDowntick && tablecells}
          {!showUptick && showDowntick && tablecells.reverse()}
        </tbody>
      </table>
    </div>
  );
};
