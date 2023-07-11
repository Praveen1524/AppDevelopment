// App.js

import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import SidePanel from './pages/sidepanel';
import BillPayments from './pages/billpayment';

function Routing() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/sidepanel" element={<SidePanel/>} />
        <Route path="/bill" element={<BillPayments/>} />
        </Routes>
        
    </Router>
    </div>
  );
}

export default Routing;
