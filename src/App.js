import './App.css';
import NavLinks from './components/navlinks';
import Content from './components/content';
import 'animate.css';

function App() {
  return (
    <div className="App animate__animated animate__backInDown">
      <NavLinks />
      <Content />
    </div>
  );
}

export default App;
