import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';

function App() {

  let [checkboxValue, setCheckboxValue] = useState(false)

  // count site visits 

  useEffect(() => {
    console.log("first render, incrementing site visits by 1");
  }, [])

  console.log("rendering App");

  let handleChange = (e) => {
    setCheckboxValue(!checkboxValue)
  }
  // count our site visits

  return (
    <div className="App">
      <Counter />
      <input type="checkbox" value={checkboxValue} onChange={() => handleChange()}/>
    </div>
  );
}

export default App;
