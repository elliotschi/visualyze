import React, { Component } from 'react';
import NavBar from './navBar';

const App = ({children}) => (
  <div className="container-fluid">
    <NavBar />
    <div>
      {children}
    </div>
  </div>
);

export default App;