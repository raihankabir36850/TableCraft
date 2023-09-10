import { Basic } from './Components/Basic/Basic';
import { ClassComponent } from './Components/ClassComponent/ClassComponent';
import { ColumnReOrdering } from './Components/Columns/ColumnReOrdering';
import { ColumnResizing } from './Components/Columns/ColumnResizing';
import { ColumnSettings } from './Components/Columns/ColumnSettings/ColumnSettings';
import { AlertCell } from './Components/Customization/AlertCell/AlertCell';
import { CustomAttributes } from './Components/Customization/CustomAttributes/CustomAttributes';

function App() {
  return (
    <>
      <h1>Data Table</h1>
      <Basic />
      <ClassComponent />
      <ColumnReOrdering />
      <ColumnResizing />
      <ColumnSettings />
      <AlertCell />
      <CustomAttributes />
    </>
  );
}

export default App;
