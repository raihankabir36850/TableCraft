export const ColumnStructure = ({ ROW, columnsArray, tableCells, tableChangedHandler, asc, dsc, columnHandler, columnNum }) => {
  const columnStr = columnsArray.map((x, index) =>
    x.checked === true ? (
      <th key={index} id={`column-${index}`}>
        <span onClick={() => columnHandler(index)}>column : {index}</span>
        {asc && columnNum === index ? (
          <span className='ka-icon ka-icon-sort up'>
            <svg className='ka-icon-sort-arrow-up' xmlns='http://www.w3.org/2000/svg' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 -150 1024 1024' width='10' height='10'>
              <g>
                <path d='M236.544 461.568c-21.504-20.48-54.272-20.48-74.752 0-20.48 21.504-20.48 54.272 0 74.752l312.32 312.32c9.216 9.216 22.528 15.36 37.888 15.36 14.336 0 27.648-6.144 37.888-15.36l312.32-312.32c20.48-20.48 20.48-53.248 0-74.752-21.504-20.48-54.272-20.48-74.752 0l-223.232 224.256v-793.6c0-29.696-23.552-52.224-52.224-52.224-29.696 0-52.224 22.528-52.224 52.224v792.576l-223.232-223.232z'></path>
              </g>
            </svg>
            <span></span>
          </span>
        ) : null}
        {dsc && columnNum === index ? (
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
