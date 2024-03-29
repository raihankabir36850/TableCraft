import { UpArrow } from '../../UpArrow';
import { DownArrow } from '../../DownArrow';

export const ColumnStructure = ({ ROW, columnsArray, tableCells, tableChangedHandler, asc, dsc, columnHandler, columnNum }) => {
  const columnStr = columnsArray.map((x, index) =>
    x.checked === true ? (
      <th key={index} id={`column-${index}`}>
        <span onClick={() => columnHandler(index)}>column : {index}</span>
        {asc && columnNum === index ? <UpArrow /> : null}
        {dsc && columnNum === index ? <DownArrow /> : null}
      </th>
    ) : null
  );

  const tablecellStructure = tableCells.map((_, index) => {
    return (
      <tr key={index} id={`row-${index}`}>
        {_.map((__, childIndex) => {
          return __.checked === true ? (
            <th key={childIndex} id={`column-${childIndex}`}>
              <input value={__.value} type='text' data-parent={index} onChange={(e) => tableChangedHandler(e, e.target.dataset.parent, childIndex)} />
            </th>
          ) : null;
        })}
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>{columnStr}</tr>
        </thead>
        <tbody>
          {!asc && !dsc && tablecellStructure}
          {asc && !dsc && tablecellStructure}
          {!asc && dsc && tablecellStructure && tablecellStructure.reverse()}
        </tbody>
      </table>
    </div>
  );
};
