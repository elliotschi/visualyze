import React, { PropTypes } from 'react';
import { Card, CardTitle, Col, Row } from 'react-materialize';

const UserInfo = ({userInfo}) => (
  <Row>
  <Col s={12} m={3}>
    <Card 
    header={
      <CardTitle reveal image={userInfo.avatar_url} waves="light" />
    }
    title={userInfo.login}
    reveal={
      <ul className="collection">
      {userInfo.name && <a className="collection-item">Name: {userInfo.name}</a>}
      {userInfo.login && <a className="collection-item">Username: {userInfo.login}</a>}
      {userInfo.email && <a className="collection-item">Email: {userInfo.email}</a>}
      {userInfo.location && <a className="collection-item">Location: {userInfo.location}</a>}
      {userInfo.company && <a className="collection-item">Company: {userInfo.company}</a>}
      {userInfo.followers && <a className="collection-item">Followers: {userInfo.followers}</a>}
      {userInfo.following && <a className="collection-item">Following: {userInfo.following}</a>}
      {userInfo.following && <a className="collection-item">Public Repos: {userInfo.public_repos}</a>}
      {userInfo.blog && <a className="collection-item">Blog: <a href={userInfo.blog}> {userInfo.blog}</a></a>}
      </ul>
    }
    >
      
    </Card>
    </Col>
  </Row>
);

UserInfo.propTypes = {
  userInfo: PropTypes.object.isRequired
}

export default UserInfo;

