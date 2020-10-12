import React from 'react';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Jim" />
      <HelloWorld name="Sally" />
      <HelloWorld name="May"/>
    </div>
  );
}

export default App;