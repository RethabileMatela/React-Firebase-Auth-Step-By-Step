import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
<BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/update" element={<Update/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
