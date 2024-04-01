import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Payment from './components/Payment';
import Profile from './components/Profile';
import Signup from './components/Signup';
import PlaysMenu from './components/PlaysMenu';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import PlayDetails from './components/PlayDetails';
import SeatSelect from './components/SeatSelect';
import { Footer } from './components/Footer';
import Stages from './components/Stages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/plays" element={<PlaysMenu />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/plays/:playName" element={<PlayDetails />} />
        <Route path="/plays/:playName/seat-select" element={<SeatSelect />} />
        <Route path="/plays/:playName/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
