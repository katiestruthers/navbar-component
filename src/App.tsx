import './App.css';
import { NavBar } from './components/NavBar';
import { Credits } from './components/Credits';
import { MobileMenu } from './components/MobileMenu';
import { useEffect, useState } from 'react';

const navTitles = ['Home', 'Features', 'Pricing', 'About Us', 'Contact'];

function App() {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('inherit');
  const handleClick = () => {
    setMobileMenu(!isMobileMenuOpen);
    backgroundColor === 'inherit' ? setBackgroundColor('#525252') : setBackgroundColor('inherit') ;
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const navProps =  {
    titles: navTitles,
    isMobileMenuOpen,
    handleClick
  };

  return (
    <div className="App">
      <NavBar { ...navProps } />
      <MobileMenu { ...navProps } />
      <Credits />
    </div>
  );
};

export default App;
