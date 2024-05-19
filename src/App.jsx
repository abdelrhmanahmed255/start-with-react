import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio'; // Ensure correct import paths
import Contact from './pages/contact/Contact'; // Ensure correct import paths
import Layout from './component/layout/Layout';
import NotFound from './pages/notfound/Notfound';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {path: '', element: <Layout />,
  children: [
      { index: true , element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
