import React from 'react'
import './App.css';
// import Dictaphone from './Dictaphone';
import Microphone from './Microphone';
import NewMicVersion from './NewMicVersion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Dictaphone/> */}
        <Microphone/>
        {/* <NewMicVersion/> */}
      </header>
    </div>
  );
}

export default App;
