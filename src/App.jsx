import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './home/home';
import About from './about/about';
import Education from './education/education';
function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  return (
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/education" element = {<Education />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
