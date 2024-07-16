import './App.css';
import Random from './components/Random';
import Recipe from './components/Recipe';
import Main from './components/Main'
import { useState } from 'react';

function App() {
  const [item , setItem] = useState(null);

  const handleSetItem = (data) => {
    setItem(data);
  }

  return (
    <div className="App">
      <nav id="navBar">
        <Recipe onSetItem={handleSetItem} />
        <Random onSetItem={handleSetItem}/>
      </nav>
      {item && <Main item={item} />}
    </div>
  );
}

export default App;
