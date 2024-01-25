import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { Navbar } from './components';
import { Articulos } from './components/Main/Articulos';
import { AppContext } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext>
    <Navbar></Navbar>
    <Articulos></Articulos>
  </AppContext>
)
