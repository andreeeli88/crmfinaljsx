
import { BrowserRouter as Router } from 'react-router-dom';
import { BarraInicio } from './components/BarraInicio';
import RoutesComponent from './components/Routes';


function App() {
  return (
    <div >
      
      <Router>
        <BarraInicio></BarraInicio>
        <RoutesComponent></RoutesComponent>
      </Router>
    </div>
  );
}

export default App;
