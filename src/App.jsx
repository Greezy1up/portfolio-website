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

      <div className='grain'></div>

      <div
      >

        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <HomePage />


      </div>
    </>
  );
}


export default App;
