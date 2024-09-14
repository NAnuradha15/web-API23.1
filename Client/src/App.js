import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Map from './screens/Map';

function App() {
  return (
    <Routes>
      <Route exact path = '/' Component={Home}/>
      <Route exact path = '/Map' Component={Map}/>
      
    </Routes>
  );
}

export default App;
