import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import First from './pages/First';
import Forgot from './pages/Forgot';
import Dashboard from './pages/Dashboard';
import Twitter from "./pages/Twitter";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/Forgot" element={<Forgot/>} />
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Twitter' element={<Twitter/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;