import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Germinacion from './components/Germinacion/Germinacion'
import Vegetacion from './components/Vegetacion/Vegetacion';
import Floracion from './components/Floracion/Floracion';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path='/Germinacion' element={<Germinacion/>}/>
            <Route exact path='/Vegetacion' element={<Vegetacion/>}/>
            <Route exact path='/Floracion' element={<Floracion/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
