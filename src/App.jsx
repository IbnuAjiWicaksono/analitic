import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import First from './pages/First';
import Forgot from './pages/Forgot';
import Dashboard from './pages/Dashboard';
import Twitter from "./pages/Twitter";
import Facebook from "./pages/Facebook"
import Instagram from './pages/Instagram';
import Youtube from './pages/Youtube';
import DigitalNews from './pages/DigitalNews';
import Marketplace from './pages/Marketplace';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/Forgot" element={<Forgot/>} />
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Twitter' element={<Twitter/>}/>
        <Route path="/Facebook" element={<Facebook/>}/>
        <Route path='/Instagram' element={<Instagram/>}/>
        <Route path='/Youtube' element={<Youtube/>}/>
        <Route path='/DigitalNews' element={<DigitalNews/>}/>
        <Route path='/Marketplace' element={<Marketplace/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
