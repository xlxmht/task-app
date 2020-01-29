import React from 'react';
import './App.css';
import Header from './components/Header/header.container.js';
import TaskContainer from './components/taskcontainer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <TaskContainer />
    </React.Fragment>
  );
}

export default App;
