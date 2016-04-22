import React, {Component} from 'react';

// this is a container for all the d3 components. we will pass in the data we need
class Stats extends Component {
  
  componentWillMount() {
    
  }
  
  render() {
    const { username } = this.props.params;

    return (
      <div>
        Stats for {username}
      </div>
    );
  }
}

export default Stats;