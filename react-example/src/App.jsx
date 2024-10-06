import './App.css';
import { useState } from 'react';
import CompWithProps from './components/CompWithProps'; 
function App() {
  const [count, setCount] = useState(0); 

  
  const handleCountChange = () => {
    setCount(prevCount => prevCount + 1); 
  };

  return (
    <div>
      <h1>HOLA DESDE VITE</h1>

      {/* Sección del contador */}
      <div>
        <p>Count: {count}</p> {/* Muestra el valor del contador */}
      </div>

      {/* Llamar al componente CompWithProps y pasar la función para incrementar el contador */}
      <CompWithProps onCountChange={handleCountChange} />
    </div>
  );
}

export default App;
