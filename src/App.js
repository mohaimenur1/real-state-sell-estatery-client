/** @format */
import { RouterProvider } from 'react-router-dom';

import './App.css';
import { router } from './route/Route';

function App() {
  return (
    <div className='App'>
      <h1>this is react router basics</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
