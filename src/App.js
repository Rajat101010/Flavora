import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
  return (
    <main style={{ backgroundColor: "#2F2F2F", height: "auto", minHeight:'100vh',  color: "white"}}>
      <BrowserRouter>
        <Routes>
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
      </BrowserRouter>
    </main>
  );
}

export default App;
