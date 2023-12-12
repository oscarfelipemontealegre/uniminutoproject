import './App.css';
import Home from './components/home';
import Register from './components/consult';
import Consult from './components/register';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">     
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/consult' element={<Register/>}/>
          <Route path='/register' element={<Consult/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;

