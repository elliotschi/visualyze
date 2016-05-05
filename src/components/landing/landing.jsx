import React from 'react';
import { Modal, Button, Row } from 'react-materialize';

const Landing = ({repos}) => (
  <Row>
    <ul>
      {repos ? repos.map((repo, i) => <li key={i}>{repo.full_name}</li>) : null}
    </ul>
  </Row>
);

export default Landing;