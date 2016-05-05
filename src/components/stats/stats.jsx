import React, {Component} from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-materialize';
import UserInfo from './userInfo';

// this is a container for all the d3 components. we will pass in the data we need
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: []
    }
  }
  
  componentWillMount() {
    const { username } = this.props.params;
    this.init(username);
  }
  
  componentWillReceiveProps(nextProps) {
    const { username } = nextProps.params;
    this.init(username);
  }
   
  init(username) {
    axios.get(`/api/github/user/${username}`)
      .then(userInfo => {
        this.setState({user: userInfo.data});
      });
  }
  
  render() {
    const { username } = this.props.params;
    
    // return !this.state.user ? <div><ProgressBar /></div> : <div>{this.state.user.avatar_url}</div>
    
    return (
      <div>
        <UserInfo userInfo={this.state.user} />
      </div>
    );
  }
}

export default Stats;