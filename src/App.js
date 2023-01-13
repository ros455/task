import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import Users from './components/Users/Users';
import { Route, Routes } from "react-router-dom";
import Posts from './components/Posts/Posts';
function App() {

  return (
    <div className='wrapper'>
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path="*" element={<h1>Path not resolved</h1>} />
      <Route path="posts" element={<Posts/>} />
    </Routes>
    </div>
  );
}

export default App;
