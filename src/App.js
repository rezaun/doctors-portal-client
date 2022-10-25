import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Apponitment from './Pages/Apponitment/Apponitment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
        <RequireAuth>
          <Apponitment/>
        </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>

        </Route>
        <Route path="dashboard" element={
        <RequireAuth>
          <Dashboard/>
        </RequireAuth>
        } >
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
