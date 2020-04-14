import React from 'react';
import './App.css';
import Header from '../components/header/Header'
import MainContent from '../components/content/MainContent'
import Illustrations from '../components/illustrations/Illustrations'

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Illustrations />
    </div>
  );
}

export default App;
