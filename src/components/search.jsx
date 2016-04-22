import React, { Component, PropTypes } from 'react';
import { Input, Row, Icon } from 'react-materialize';

class Search extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  
  onChange(e) {
    console.log('hi');
    this.username = e.target.value;
    console.log(this.username)
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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-field">
          <input id="search" type="text" ref={(ref) => this.getRef(ref)} placeholder="Search a Github Username" required></input>
          <label for="search">
            <i className="material-icons">search</i>
          </label>
        </div>
      </form>
    );
  }
  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit.bind(this)}>
  //       <Row>
  //         <Input 
  //           placeholder="Search a Github Username" 
  //           s={6}
  //           id="search"
  //           type="text"
  //           onChange={this.onChange.bind(this)}
  //           required>
  //           <Icon>search</Icon>
  //         </Input>
  //       </Row>
  //     </form>
  //   );
  // }
  
}

export default Search;