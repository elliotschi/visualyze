import React, { Component } from 'react';
import NavBar from './navBar';

const App = ({children, history}) => (
  <div className="container-fluid">
    <NavBar history={history} />
    <div>
      {children}
    </div>
  </div>
);

export default App;