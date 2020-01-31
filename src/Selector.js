import React, { Component } from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // key: this.props.usersData.id,
      currentUser: ''
    }
  }

  handleChange = (e) => {
    // this.setState({ currentUser: e.target.value });
    this.props.whichUser(e.target.value);
    console.log(this.state.currentUser)
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-3 mt-3">
          <select className="custom-select" onChange={this.handleChange}>
            {this.props.usersData.map(user => <option key={user.id} value={user.name}>{user.name}</option>)}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Selector;