import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './component/Contact';
import HandleWrongRout from './component/HandleWrongRout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path="/" element={<App/>} exact/>
<Route path="contact" element={<Contact/>}exact/>
<Route path="/about" element={<About/>} exact/>
<Route path="*" element={<HandleWrongRout/>} exact/>

</Routes>

</BrowserRouter>
);

