import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './routes/Home';
import { useState,useEffect } from 'react';
import { Responsive } from './components/Responsive';
function App() {
const [toggle,change] = useState(false)
useEffect(() => {
  window.addEventListener("resize",()=>{
    if(window.innerWidth>768){
      change(false)
    }
  })
  
}, [toggle])
  return (
    <div >
      <Router>
      <Responsive toggle={toggle} change={change} />

      <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Home/>} />
        <Route path="/about" element={<Home/>} />
        <Route path="/contact" element={<Home/>} /> */}
      </Routes>
      </Router>

    </div>
  );
}

export default App;
