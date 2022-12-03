/** @format */

import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

export const router = createBrowserRouter([
  { path: '/', element: <div>this is default page</div> },
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <div>this is about page</div> },
]);
