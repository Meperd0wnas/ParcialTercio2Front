import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import './App.css'; 
import AddProductForm from "./components/Pagar";
import UpdateProductForm from './components/ConsultarPago';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pagar" element={<Pagar />} />
        <Route path="/consultarPago" element={<ConsultarPago />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
