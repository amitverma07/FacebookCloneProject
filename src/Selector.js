import React, { Component } from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <div class="col-md-3 mt-3">
          <select class="custom-select">
            <option>Amit</option>
            <option>Jawad</option>
            <option>Dhruv</option>
            <option>Erfun</option>
            <option>Dragon</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Selector;