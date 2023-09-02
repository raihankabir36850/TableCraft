import { Basic } from './Components/Basic/Basic';
import { ClassComponent } from './Components/ClassComponent/ClassComponent';
import { ColumnReOrdering } from './Components/Columns/ColumnReOrdering';
import { ColumnResizing } from './Components/Columns/ColumnResizing';

function App() {
  return (
    <>
      <h1>Data Table</h1>
      <Basic />
      <ClassComponent />
      <ColumnReOrdering />
      <ColumnResizing />
    </>
  );
}

export default App;
