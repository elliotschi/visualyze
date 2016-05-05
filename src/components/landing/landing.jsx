import React from 'react';
import { Modal, Button, Row } from 'react-materialize';

const Landing = ({repos}) => (
  <Row>
    <ul>
      {repos ? repos.map((repo, i) => <li key={i}>{JSON.stringify(repo)}</li>) : null}
    </ul>
    <Modal
      header='About'
      bottomSheet
      trigger={
        <Button waves='light'>MODAL!!!!!!!</Button>
      }>
      Visualyze searches and displaces information about github
    </Modal>
  </Row>
);

export default Landing;