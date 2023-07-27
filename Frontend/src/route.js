// App.js

import React from 'react';
import {Route ,Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login';
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
import Login from './pages/reduxLogin';
import OnlinePayments from './pages/onlinepay';
import Transfer from './pages/accdetails';
import AddAccount from './pages/addaccount';
import PayHistory from './pages/payhistory';
import AccountDetails from './pages/AccountDetails';


function Routing() {
  return (
    <div className="App">
    
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route path="/redlogin" element={<Login/>}/>
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
        <Route path='/pay' element={<OnlinePayments/>} />
        <Route path='/add' element={<AddAccount/>} />
        <Route path='/view' element={<Transfer/>} />
        <Route path='/his' element={<PayHistory/>} />
        <Route path='/new' element={<AccountDetails/>} />
        </Routes>
        
    </div>
  );
}

export default Routing;
