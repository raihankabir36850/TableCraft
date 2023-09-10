import { useState, ChangeEvent } from 'react';
import { Title } from '../../Title/Title';
import { ColumnStructure } from './ColumnStructure';
import { ColumnCheckBox } from './ColumnCheckBox';

export const ColumnSettings = () => {
  const ROW = 9;

  const [columns, setColumns] = useState([
    { id: 0, checked: true, value: '' },
    { id: 1, checked: true, value: '' },
    { id: 2, checked: true, value: '' },
    { id: 3, checked: false, value: '' },
  ]);

  const generalArray = Array(ROW)
    .fill('')
    .map((x, index) => {
      return columns.map((_x, ChildIndex) => {
        _x.value = `column ${ChildIndex}: row: ${index}`;
        return { ..._x };
      });
    });

  const [primaryArray, setPrimaryArray] = useState(generalArray);
  const [showUptick, setshowUptick] = useState(false);
  const [showDowntick, setshowDowntick] = useState(false);
  const [columnNum, setcolumnNum] = useState(100);

  const CheckBoxHandler = (_e: ChangeEvent<HTMLInputElement>, id) => {
    const modifiedArray = [...columns];
    modifiedArray[id] = { ...modifiedArray[id], checked: _e.target.checked };
    const bigArray = [...primaryArray];

    const anotherArray = bigArray.map((item, index) => {
      return item.map((childItem, childIndex) => {
        const findItem = modifiedArray.find((findItem, findIndex) => findItem.id === childItem.id);
        return findItem ? { ...childItem, checked: findItem.checked, value: childItem.value } : childItem;
      });
    });

    setColumns(modifiedArray);
    setPrimaryArray(anotherArray);
  };

  const tableChangedHandler = (_e, index: number | string, childIndex: number) => {
    const modifiedArray = [...primaryArray];
    const generalArray = modifiedArray.map((x, ind) => {
      return x.map((_x, ChildInd) => {
        _x.value = index == ind && childIndex == ChildInd ? _e.target.value : _x.value;
        return { ..._x };
      });
    });
    setPrimaryArray(generalArray);
  };

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

  return (
    <div>
      <Title title='Column Settings' />
      <ColumnCheckBox COLUMN={columns} CheckBoxHandler={CheckBoxHandler} />
      <div className='table_container_settings'>
        <ColumnStructure
          ROW={ROW}
          columnsArray={columns}
          tableCells={primaryArray}
          tableChangedHandler={tableChangedHandler}
          asc={showUptick}
          dsc={showDowntick}
          columnHandler={columnHandler}
          columnNum={columnNum}
        />
      </div>
    </div>
  );
};
