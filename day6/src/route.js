// App.js

import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import SidePanel from './pages/sidepanel';
import BillPayments from './pages/billpayment';
import CustomerSupportPage from './pages/contact';
import SideBar from './pages/sidebar';
import Deposit from './pages/deposit';
import ProfileUpdateForm from './pages/update';
import RegistrationForm from './pages/register';
import ManageForm from './pages/manage';
import AccountDetailsPage from './pages/account';
import TransactionHistory from './pages/transaction';
import SavingsPage from './pages/savings';

function Routing() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<SidePanel/>} />
        <Route path="/sidebar" element={<SideBar/>} />
        <Route path="/bill" element={<BillPayments/>} />
        <Route path='/contact' element={<CustomerSupportPage/>} />
        <Route path='/deposit' element={<Deposit/>} />
        <Route path='/update' element={<ProfileUpdateForm/>} />
        <Route path='/register' element={<RegistrationForm/>} />
        <Route path='/manage' element={<ManageForm/>} />
        <Route path='/acc' element={<AccountDetailsPage/>} />
        <Route path='/transaction' element={<TransactionHistory/>} />
        <Route path='/savings' element={<SavingsPage/>} />
        </Routes>
        
    </Router>
    </div>
  );
}

export default Routing;
