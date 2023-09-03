export const ColumnCheckBox = ({ COLUMN, CheckBoxHandler }) => {
  return (
    <div>
      <div className='header'>
        <div>field</div>
        <div>visible</div>
      </div>
      <div className='body'>
        {COLUMN.map((item, index) => {
          return (
            <div key={index}>
              <div>Column:{index}</div>
              <div>
                <input type='checkbox' id='demoCheckbox' name='checkbox' value='1' data-id={index} defaultChecked={item.checked ? true : false} onChange={(e) => CheckBoxHandler(e, index)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
