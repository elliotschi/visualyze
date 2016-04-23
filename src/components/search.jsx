import React, { Component, PropTypes } from 'react';
import { Input, Row, Icon } from 'react-materialize';

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  onChange(e) {
    this.username = e.target.value;
  }
  
  getRef(ref) {
    this.username = ref;
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const username = this.username.value;
    this.username.value = '';
    this.context.router.push(`/${username}`)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="col s6">
        <div className="input-field col s6">
          <input id="search" type="text" ref={(ref) => this.getRef(ref)} placeholder="Search a Github Username" required></input>
          <label for="search">
            <i className="material-icons">search</i>
          </label>
        </div>
      </form>
    );
  }
}

export default Search;