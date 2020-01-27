import React from 'react';
import './App.css';
import Header from './components/header';
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
