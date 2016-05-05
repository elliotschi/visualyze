import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Landing from '../components/landing/landing';

class LandingContainer extends Component {
  componentWillMount() {
    this.props.fetchGithubRepos()
  }

  render() {
    const { repos } = this.props;
    return (
        <Landing 
        repos={repos}
        />
    );
  }
}

const mapStateToProps = ({github: {repos}}, props) => {
  return {
    repos
  }
};

export default connect(mapStateToProps, actionCreators)(LandingContainer);