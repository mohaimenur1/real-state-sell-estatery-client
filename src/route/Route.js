/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import HomePage from '../pages/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        // loader: async () => {
        //   return fetch('http://localhost:5000/property');
        // },
      },
    ],
  },
]);
