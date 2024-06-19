import './App.css';
import { NavBar } from './components/NavBar';
import { Credits } from './components/Credits';
import { MobileMenu } from './components/MobileMenu';
import { useState } from 'react';

const navTitles = ['Home', 'Features', 'Pricing', 'About Us', 'Contact'];

function App() {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const navProps =  {
    titles: navTitles,
    isMobileMenuOpen,
    setMobileMenu
  }

  return (
    <div className="App">
      <NavBar { ...navProps } />
      <MobileMenu { ...navProps } />
      <Credits />
    </div>
  );
};

export default App;
