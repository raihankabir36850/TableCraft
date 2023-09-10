import { Title } from '../../Title/Title';
import './AlertCell.css';

const dataTable = [
  {
    id: 0,
    dataArray: [
      {
        col: 'column 1',
        cell: 'column: 1 row: 0',
      },
      {
        col: 'column 2',
        cell: 'column: 2 row: 0',
      },
      {
        col: 'column 3',
        cell: 'column: 3 row: 0',
      },
      {
        col: 'column 4',
        cell: 'column: 4 row: 0',
      },
    ],
  },
  {
    id: 1,
    dataArray: [
      {
        col: 'column 1',
        cell: 'column: 1 row: 1',
      },
      {
        col: 'column 2',
        cell: 'column: 2 row: 1',
      },
      {
        col: 'column 3',
        cell: 'column: 3 row: 1',
      },
      {
        col: 'column 4',
        cell: 'column: 4 row: 1',
      },
    ],
  },
  {
    id: 2,
    dataArray: [
      {
        col: 'column 1',
        cell: 'column: 1 row: 2',
      },
      {
        col: 'column 2',
        cell: 'column: 2 row: 2',
      },
      {
        col: 'column 3',
        cell: 'column: 3 row: 2',
      },
      {
        col: 'column 4',
        cell: 'column: 4 row: 2',
      },
    ],
  },
  {
    id: 3,
    dataArray: [
      {
        col: 'column 1',
        cell: 'column: 1 row: 2',
      },
      {
        col: 'column 2',
        cell: 'column: 2 row: 2',
      },
      {
        col: 'column 3',
        cell: 'column: 3 row: 2',
      },
      {
        col: 'column 4',
        cell: 'column: 4 row: 2',
      },
    ],
  },
];

export const AlertCell = () => {
  const columnStructure = dataTable.map((item, index) => {
    return (
      <th key={index} id={`column-${index}`}>
        column : {index + 1}
      </th>
    );
  });

  const clickTableCell = (event, data) => {
    alert(JSON.stringify(data));
  };

  const tableCellStructure = dataTable.map((cell, index) => {
    return (
      <tr key={index}>
        <td id={`${cell.id}`} onClick={(e) => clickTableCell(e, cell)}>
          <img src='https://komarovalexander.github.io/ka-table/static/icons/alert.svg' />
        </td>
        {cell.dataArray &&
          cell.dataArray.map((dataItem, dataIndex) => {
            return <td key={dataIndex}>{dataItem.cell}</td>;
          })}
      </tr>
    );
  });

  return (
    <div className='table_alert_cell_container'>
      <Title title='Customization --> Alert Cell' />
      <table>
        <thead>
          <tr>
            <th></th>
            {columnStructure}
          </tr>
        </thead>
        <tbody>{tableCellStructure}</tbody>
      </table>
    </div>
  );
};
