import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import {  routes } from './router';
import { RouterProvider } from 'react-router';
import Nprogress from './components/Nprogress';
import { Provider } from 'mobx-react';



function App() {
  return (
    <div className="App">
        <RouterProvider router={routes} fallbackElement={<Nprogress></Nprogress>} />
    </div>
  );
}

export default App;
