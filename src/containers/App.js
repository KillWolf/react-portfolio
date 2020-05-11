import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Aux from '../hoc/Aux/Aux';
import './App.css';
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Illustrations from '../components/Illustrations/Illustrations'
import Navigation from '../components/Navigation/Navigation'
import Project from '../components/Projects/Project';


function App() {

  const storedName = localStorage.getItem('name');

  const [name, setName] = useState(storedName ? storedName : 'Visitor');
  const [nameChanged, setNameChanged] = useState(false);


  function setVisitorNameHandler(e) {
    setName(e.target.value);
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
    <Aux>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
          <Content name={name} nameChanged={nameChanged} onSubmit={onSubmit} change={setVisitorNameHandler} />
          <Project />
          {/*<Illustrations /> ADD LATER WHEN LAYOUT IS FIXED */}
        </div>
      </BrowserRouter>
    </Aux>
  );
}

export default App;
