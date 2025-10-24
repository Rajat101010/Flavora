import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import dayjs from "dayjs";

import Home from './pages/home';
import Info from './pages/info';

import Monday from './pages/monday';
import Tuesday from './pages/tuesday';
import Wednesday from './pages/wednesday';
import Thursday from './pages/thursday';
import Friday from './pages/friday';
import Saturday from './pages/saturday';
import Sunday from './pages/sunday';

function App() {
  const day = dayjs().format("dddd").toLowerCase();

  return (
    <main style={{ backgroundColor: "#2F2F2F", height: "auto", minHeight:'100vh',  color: "white"}}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={`/${day}`} />} />

          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/monday' element={<Monday />} />
          <Route path='/tuesday' element={<Tuesday />} />
          <Route path='/wednesday' element={<Wednesday />} />
          <Route path='/thursday' element={<Thursday />} />
          <Route path='/friday' element={<Friday />} />
          <Route path='/saturday' element={<Saturday />} />
          <Route path='/sunday' element={<Sunday />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
