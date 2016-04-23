import React, {Component} from 'react';
import axios from 'axios';
import { ProgressBar } from 'react-materialize';

// this is a container for all the d3 components. we will pass in the data we need
class Stats extends Component {
  
  componentWillMount() {
    axios.post('/api/github', )
  }
  
  render() {
    const { username } = this.props.params;

    return (
      <div>
        <ProgressBar />
        Stats for {username}
      </div>
    );
  }
}

export default Stats;