import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs'
import ContactUs from './pages/ContactUs'
import Team from './pages/Team'

import { Route, Routes, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
  </BrowserRouter>
);
