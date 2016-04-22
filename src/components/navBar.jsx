import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Search from './search';

const NavBar = ({history}) => (
  <nav className="blue">
    <div className="row">
      <Search history={history} />
      <a href="/" className="brand-logo center">visualyze</a>
    </div>
  </nav>
);

export default NavBar;