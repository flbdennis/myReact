import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'

// 一个单纯的 function 组件 并没有 Component提供的功能
function App() {
  return (
    <div className="App">
        <Home></Home>
    </div>
  );
}

export default App;
