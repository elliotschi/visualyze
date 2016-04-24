import React from 'react';
import { Modal, Button, Row } from 'react-materialize';

const Landing = () => (
  <Row>
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