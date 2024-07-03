import { AlertProvider } from './contexts/alert';
import { router } from 'routers';

import { RouterProvider } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <AlertProvider>
        <RouterProvider router={router}></RouterProvider>
      </AlertProvider>
    </>
  );
}

export default App;
