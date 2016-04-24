import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import Search from './search';
import { Row } from 'react-materialize';

const NavBar = ({history}) => (
  <nav className="blue">
    <Row>
      <Search history={history} />
      <a href="/" className="brand-logo center">visualyze</a>
    </Row>
  </nav>
);

export default NavBar;