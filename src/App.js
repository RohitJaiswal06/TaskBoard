import './App.css';
import {Routes,Route} from 'react-router-dom'
import Login from './Components/common/Login'
import Register from './Components/common/Register'
import Taskboard from './Pages/Taskboard/Taskboard'
import Calculator from './Pages/Calculator/calculator'
import Weather from './Pages/Weather/Weather'
import Homepage from './Components/common/Homepage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/homepage' element={<Homepage/>} />
        <Route path='/taskboard' element={<Taskboard/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/weather' element={<Weather/>} />        
      </Routes>
    </div>
  );
}

export default App;
