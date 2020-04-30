import React, { useState } from 'react';
import './App.css';
import Header from '../components/header/Header'
import MainContent from '../components/content/MainContent'
import Illustrations from '../components/illustrations/Illustrations'
import Navigation from '../components/Navigation/Navigation'


function App() {

  const storedName = localStorage.getItem('name');

  const [name, setName] = useState(storedName ? storedName : 'Visitor');
  const [nameChanged, setNameChanged] = useState(false);
  const [toggleMenuState, setToggleMenuState] = useState(false)


  function setVisitorNameHandler(e) {
    setName(e.target.value);
  }

  function updateToggleMenuState() {
    let newState = !toggleMenuState;
    setToggleMenuState(newState);
  }

  function onSubmit(e) {
    e.preventDefault();
    setNameChanged(true);
    setTimeout(() => {
      setNameChanged(false);
    }, 2000)
    localStorage.setItem('name', name);
  }

  return (
    <div className="App">
      <Header />
      <Navigation currentState={toggleMenuState} toggleMenuState={updateToggleMenuState}/>
      <MainContent name={name} nameChanged={nameChanged} onSubmit={onSubmit} change={setVisitorNameHandler}/>
      <Illustrations />
    </div>
  );
}

export default App;
