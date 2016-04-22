import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Search from './search';

const NavBar = ({history}) => (
  <nav>
    <Search history={history} />
    <NavItem href="/">visualyze</NavItem>
  </nav>
);

export default NavBar;