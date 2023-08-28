/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, Key, useState } from 'react';
import { Title } from '../Title/Title';

export const ClassComponent = () => {
  const row = 9;
  const column = 4;
  let generalArray, tablecells;
  const [showUptick, setshowUptick] = useState(false);
  const [showDowntick, setshowDowntick] = useState(false);
  const [columnNum, setcolumnNum] = useState(100);
  const [columnValue, setcolumnValue] = useState('');
  const [address, setAdress] = useState('');
  const [primaryArray, setPrimaryArray] = useState([]);

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
    console.log('cell chnage', _index, childIndex);
    setcolumnValue((prev: unknown) => (prev = _e.target.value));
    setAdress(`${_index}X${childIndex}`);
  };

  const columnStr = Array(column)
    .fill('')
    .map((x, index) => (
      <th key={index} id={`column-${index}`}>
        <span onClick={() => columnHandler(index)}>column : {index}</span>
        {showUptick && columnNum === index ? (
          <span className='ka-icon ka-icon-sort up'>
            <svg className='ka-icon-sort-arrow-up' xmlns='http://www.w3.org/2000/svg' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 -150 1024 1024' width='10' height='10'>
              <g>
                <path d='M236.544 461.568c-21.504-20.48-54.272-20.48-74.752 0-20.48 21.504-20.48 54.272 0 74.752l312.32 312.32c9.216 9.216 22.528 15.36 37.888 15.36 14.336 0 27.648-6.144 37.888-15.36l312.32-312.32c20.48-20.48 20.48-53.248 0-74.752-21.504-20.48-54.272-20.48-74.752 0l-223.232 224.256v-793.6c0-29.696-23.552-52.224-52.224-52.224-29.696 0-52.224 22.528-52.224 52.224v792.576l-223.232-223.232z'></path>
              </g>
            </svg>
            <span></span>
          </span>
        ) : null}
        {showDowntick && columnNum === index ? (
          <span className='ka-icon ka-icon-sort down'>
            <svg className='ka-icon-sort-arrow-up' xmlns='http://www.w3.org/2000/svg' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 -150 1024 1024' width='10' height='10'>
              <g>
                <path d='M236.544 461.568c-21.504-20.48-54.272-20.48-74.752 0-20.48 21.504-20.48 54.272 0 74.752l312.32 312.32c9.216 9.216 22.528 15.36 37.888 15.36 14.336 0 27.648-6.144 37.888-15.36l312.32-312.32c20.48-20.48 20.48-53.248 0-74.752-21.504-20.48-54.272-20.48-74.752 0l-223.232 224.256v-793.6c0-29.696-23.552-52.224-52.224-52.224-29.696 0-52.224 22.528-52.224 52.224v792.576l-223.232-223.232z'></path>
              </g>
            </svg>
            <span></span>
          </span>
        ) : null}
      </th>
    ));

  if (!primaryArray.length) {
    generalArray = Array(row)
      .fill('')
      .map((x, index) => {
        return Array(column)
          .fill('')
          .map((_x, ChildIndex) => `column ${ChildIndex}: row: ${index}`);
      });

    localStorage['datas'] = JSON.stringify(generalArray);

    tablecells = generalArray.map((_, index) => {
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

    console.log(generalArray, 'generalArray');
  }

  return (
    <div>
      <Title title='Class Components' />
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
  );
};
