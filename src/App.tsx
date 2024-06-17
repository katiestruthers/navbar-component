import './App.css';
import { NavBar } from './components/NavBar';
import { Credits } from './components/Credits';

const navTitles = ['Home', 'Features', 'Pricing', 'About Us', 'Contact'];

function App() {
  return (
    <div className="App">
      <NavBar titles={navTitles}/>
      <Credits />
    </div>
  );
};

export default App;
