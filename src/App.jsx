import { useState } from 'react';
import './App.css'
import "./index.css"
import { HomePage } from './components/sections/Home/HomePage';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="grain"></div>

      <HomePage
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
}


export default App;
