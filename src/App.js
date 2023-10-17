import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from "./Compnents/MainLayout";

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<MainLayout/>}/>
    </Routes>
  </Router>
  );
}

export default App;
