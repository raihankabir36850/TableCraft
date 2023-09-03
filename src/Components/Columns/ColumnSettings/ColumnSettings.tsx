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

  const [primaryArray, setprimaryArray] = useState(generalArray);

  const CheckBoxHandler = (_e: ChangeEvent<HTMLInputElement>, id) => {
    const modifiedArray = [...columns];
    //columns[id] = { ...columns[id], checked: _e.target.checked };
    modifiedArray[id] = { ...modifiedArray[id], checked: _e.target.checked };
    console.log('LET', modifiedArray);
    const secondaryArray = Array(ROW)
      .fill('')
      .map((x, index) => {
        return modifiedArray.map((_x, ChildIndex) => {
          return columns.map((_x, ChildIndex) => {
            _x.value = `column ${ChildIndex}: row: ${index}`;
            return { ..._x };
          });
        });
      });
    setColumns(modifiedArray);
    setprimaryArray(secondaryArray);
  };

  const tableChangedHandler = (_e, index: number | string, childIndex: number) => {
    const modifiedArray = [...primaryArray];
    console.log(modifiedArray[index][childIndex], 'fresh', _e.target);
    modifiedArray[index][childIndex].value = _e.target.value;
    // console.log(modifiedArray, 'modified', modifiedArray[index][childIndex]);
    setprimaryArray(modifiedArray);
  };

  console.log(primaryArray, 'primaryarray');

  return (
    <div>
      <Title title='Column Settings' />
      <ColumnCheckBox COLUMN={columns} CheckBoxHandler={CheckBoxHandler} />
      <div className='table_container_settings'>
        <ColumnStructure ROW={ROW} columnsArray={columns} tableCells={primaryArray} tableChangedHandler={tableChangedHandler} />
      </div>
    </div>
  );
};
