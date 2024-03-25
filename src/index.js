import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import ErrorPage from './components/NotFound/NotFound';
import About from './components/About/About';
import CarForm from './components/CarForm/CarForm';
import CarList from './components/CarList/CarList';

const router = createBrowserRouter([
  {
  path:"/",
  element: <App/>,
  errorElement: <ErrorPage/>
  },
  {
    path: '/home',
    element: <Home /> 
  },
  {
      path: '/about',
      element: <About/>
  },
  {
    path: '/carform',
    element: <CarForm/>
  },
  {
    path: '/carlist',
    element: <CarList/>
  }
])






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
