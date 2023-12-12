import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<View />} />
      <Route path="/add" element={<Add />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="/search" element={<Search />} />


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
