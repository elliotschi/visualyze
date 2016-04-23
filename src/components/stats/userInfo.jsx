import React, { PropTypes } from 'react';
import { Collection, CollectionItem, MediaBox, Card, CardTitle, Col } from 'react-materialize';

const UserInfo = ({userInfo}) => (
  <div className="row">
  <Col s={3} m={3}>
    <Card 
    header={
      <CardTitle reveal image={userInfo.avatar_url} waves="light" />
    }
    title={userInfo.login}
    reveal={
          <Collection>
      {userInfo.name && <CollectionItem>{userInfo.name}</CollectionItem>}
      
    </Collection>
    }
    >
      
    </Card>
    </Col>
  </div>
);

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired
}

export default UserInfo;
