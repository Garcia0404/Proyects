import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { Navbar } from './components';
import { Slider } from './components/Main/Slider';
import { AppContext } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext>
    <Navbar></Navbar>
    <Slider></Slider>
  </AppContext>
)
