import React, { Component } from 'react'
import Header from './Header';
import PostBox from './PostBox';

export default class MainContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <PostBox/>
      </React.Fragment>   
    )
  }
}
