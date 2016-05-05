import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/stats/userInfo';
import { ProgressBar } from 'react-materialize';
import * as actionCreators from '../actions';

export class StatsContainer extends Component {
  componentWillMount() {
    const { params: {username}, fetchGithubUser } = this.props;
    fetchGithubUser(username);
  }

  render() {
    const { user } = this.props;
    return user ? (
      <div>
        <UserInfo userInfo={user}/>
      </div>
    ) : <ProgressBar />
  }
}

const mapStateToProps = ({github: {user}}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, actionCreators)(StatsContainer);
