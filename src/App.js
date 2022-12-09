import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import Gif  from './Gif';
import {Route,BrowserRouter,Routes} from 'react-router-dom';

export class App extends React.Component{


render() {
    return (
<BrowserRouter>
 
 <Routes>
 <Route exact path="/" element={<LoginForm/>}/>
   <Route path="/Login" element={<LoginForm/>}/>

   <Route path="/Register" element={<RegisterForm/>} />
 

   <Route path="/gif" element={<Gif/>} />
    
 </Routes>
</BrowserRouter>
  );
  }
}

export default App;
