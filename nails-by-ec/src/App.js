import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';

import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Offer } from './pages/Offer';
import { About } from './pages/About';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'offer', element: <Offer /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
