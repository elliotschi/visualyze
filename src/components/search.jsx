import React, { Component, PropTypes } from 'react';
import { Input, Row, Icon, Col } from 'react-materialize';

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
    this.context.router.push(`/${username}`);
  }
  
  render() {
    return (
      <Col s={6} m={6}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Col s={6} m={6}>
            <div className="input-field">
              <input id="search" type="text" ref={(ref) => this.getRef(ref)} placeholder="Search a Github Username" required></input>
              <label for="search">
                <i className="material-icons">search</i>
              </label>
            </div>
            </Col>
        </form>
      </Col>
    );
  }
}

export default Search;