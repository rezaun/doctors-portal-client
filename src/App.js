import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Apponitment from './Pages/Apponitment/Apponitment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div className='max-w-7xl'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Apponitment/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
