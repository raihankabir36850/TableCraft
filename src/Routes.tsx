import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import { OverView } from './Pages/Basic';
import { ErrorPage } from './Pages/Error';

import { Basic } from './Components/Basic/Basic';
import { ClassComponent } from './Components/ClassComponent/ClassComponent';
import { ColumnReOrdering } from './Components/Columns/ColumnReOrdering';
import { ColumnResizing } from './Components/Columns/ColumnResizing';
import { ColumnSettings } from './Components/Columns/ColumnSettings/ColumnSettings';
import { AlertCell } from './Components/Customization/AlertCell/AlertCell';
import { CustomAttributes } from './Components/Customization/CustomAttributes/CustomAttributes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/overview',
    element: <OverView />,
    children: [
      { index: true, element: <div>show table contents</div> },
      {
        path: 'basic',
        element: <Basic />,
      },
      {
        path: 'class-component',
        element: <ClassComponent />,
      },
      {
        path: 'column-reordering',
        element: <ColumnReOrdering />,
      },
      {
        path: 'column-resizing',
        element: <ColumnResizing />,
      },
      {
        path: 'column-settings',
        element: <ColumnSettings />,
      },
      {
        path: 'alert-cell',
        element: <AlertCell />,
      },
      {
        path: 'custom-attributes',
        element: <CustomAttributes />,
      },
    ],
  },
]);
