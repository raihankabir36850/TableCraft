import { useState } from 'react';
import { Title } from '../../Title/Title';
import { ColumnStructure } from './ColumnStructure';
import { ColumnCheckBox } from './ColumnCheckBox';

export const ColumnSettings = () => {
  const ROW = 9;

  const [columns, setColumns] = useState([
    { id: 0, checked: true },
    { id: 1, checked: true },
    { id: 2, checked: true },
    { id: 3, checked: false },
  ]);

  const generalArray = Array(ROW)
    .fill('')
    .map((x, index) => {
      return columns.map((_x, ChildIndex) => (_x.checked == true ? true : false));
    });

  const [primaryArray, setprimaryArray] = useState(generalArray);

  const CheckBoxHandler = (_e: ChangeEvent<HTMLInputElement>, id) => {
    columns[id] = { id: id, checked: _e.target.checked };
    const modifiedArray = [...columns];
    console.log(_e.target.checked, 'checked test', columns);
    setColumns(modifiedArray);
  };

  return (
    <div>
      <Title title='Column Settings' />
      <ColumnCheckBox COLUMN={columns} CheckBoxHandler={CheckBoxHandler} />
      <div className='table_container_settings'>
        <ColumnStructure ROW={ROW} columnsArray={columns} tableCells={primaryArray} />
      </div>
    </div>
  );
};
