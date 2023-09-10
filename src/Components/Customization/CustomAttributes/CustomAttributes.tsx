import { Title } from '../../Title/Title';

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
];

let curentObject: object = dataArray[0];
for (let i = 0; i < dataArray.length; i++) {
  const objectLength = typeof dataArray[i] === 'object' ? Object.keys(dataArray[i]).length : 0;
  if (objectLength > Object.keys(curentObject).length) {
    curentObject = dataArray[i];
  }
}

const columns = Object.keys(curentObject).filter((item, index) => item !== 'id');

const columnStructures = columns.map((column, index) => {
  return <th key={index}>{column}</th>;
});

const tableCells = dataArray.map((item, index) => {
  return (
    <tr key={item.id}>
      {Object.keys(item).map((column, columnIndex) => {
        return column !== 'id' ? (
          <th key={columnIndex}>{column !== 'tryDate' ? item[column].toString() : item[column].toLocaleDateString('en', { month: '2-digit', day: '2-digit', year: 'numeric' }).toString()}</th>
        ) : null;
      })}
    </tr>
  );
});

export const CustomAttributes = () => {
  return (
    <div>
      <Title title='Custom Attributes' />
      <table>
        <thead>
          <tr>{columnStructures}</tr>
        </thead>
        <tbody>{tableCells}</tbody>
      </table>
    </div>
  );
};
