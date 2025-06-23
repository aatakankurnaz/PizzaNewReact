import './App.css';
import AnaSayfa from "./components/AnaSayfa";
import Form from './components/Form';
import { Routes, Route } from 'react-router-dom';
import SiparisSonucu from './components/SiparisSonucu';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/form" element={<Form />} />
        <Route path="/siparis-sonucu" element={<SiparisSonucu />} />
      </Routes>
    </>
  );
}

export default App;
