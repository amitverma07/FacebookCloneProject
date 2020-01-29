import React, { Component } from 'react';
​
class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<select>
      <option>Amit</option>
      <option>Jawad</option>
      <option>Dhruv</option>
      <option>Erfun</option>
      <option>Dragon</option>
    </select> );
  }
}
 
export default Selector;