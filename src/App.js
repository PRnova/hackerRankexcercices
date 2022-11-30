
import './App.css';
import BasicButtons from './components/BasicButtons';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import TypographyComp from './components/TypographyComp';

function App() {
  return (
    <div className="App">
      <BasicButtons/>
      <TypographyComp />
      <Ejercicio1/>
      <Ejercicio2/>
      <Ejercicio3/>
    </div>
  );
}

export default App;
