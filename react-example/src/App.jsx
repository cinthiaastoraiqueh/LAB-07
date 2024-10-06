import './App.css'
import { Button } from './components/Button'

function App() {
  const buttonText = "Count: ";

  return (
    <>
      <h1>Hola desde Vite</h1>
      <Button text={ buttonText }/>
    </>
  );
}

export default App;
