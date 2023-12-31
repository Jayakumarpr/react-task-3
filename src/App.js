import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Career from './components/Career';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Career />
    </BrowserRouter>
  );
}

export default App;
