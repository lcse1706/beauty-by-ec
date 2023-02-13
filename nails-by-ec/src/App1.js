import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';

import { Home } from './components/pages/Home';
import { Gallery } from './components/pages/Gallery';
import { Offer } from './components/pages/Offer';
import { About } from './components/pages/About';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/offer', element: <Offer /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
