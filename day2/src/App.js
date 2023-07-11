// App.js

import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route exact path="/" element={<Login/>} />
        </Routes>
        
    </Router>
    </div>
  );
}

export default App;
