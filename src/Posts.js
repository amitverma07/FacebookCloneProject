import React, { Component } from 'react';
import StaticPost from './StaticPost';
import Comment from './Comment'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: 0,
      count: 0,
      // toggleComment: false,
      // commentPosts: '',
      // commentData: [],
    };
  }

  displayDate = () => {
    return new Date().toLocaleString()
  }

  handleLikesClick = () => {
    this.setState(preState => { return { count: preState.count + 1 } });
  }

  handleEmojiClick = () => {
  this.setState(preState => { return { counts: preState.counts + 1 } });
}

  // handleCommentClick = () => {
  //   this.setState({ toggleComment: true });
  // }

  // handleCommentSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({ commentData: this.state.commentPosts });
  //   document.getElementById("resets").reset();
  // }

  // handleChanges = (e) => {
  //   this.setState({ commentPosts: e.target.value });
  // }

  render() {
    // const toggleComments = this.state.toggleComment;
    // let button;
    // if (toggleComments) {
    //   button = <form id="resets">
    //     <input type="text" onChange={this.handleChanges} className="form-control mt-3 mb-0" style={{ minWidth: "525px", marginLeft: "-150PX" }}></input>
    //     <button className="btn btn-primary mt-2" style={{ marginLeft: "285px", marginBottom: "-15px" }} type="button" onClick={this.handleCommentSubmit}>Post</button>
    //   </form>
    // }

    return (
      <React.Fragment>
      
        {this.props.type.map(elem => {
          return (

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div style={{ fontSize: "14px", color: "gray" }}>
                      <img src="https://i.pravatar.cc/300" alt="postimg" className="rounded-circle"
                        style={{ width: '40px', marginRight: '4px' }} />
                      <a href="#h"><b>{this.props.userName}</b></a>
                      <p>{this.displayDate()}</p>
                    </div>
                    {elem}
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ marginRight: '24px' }}>{this.state.counts} Heart {this.state.count} Like</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row" style={{ marginLeft: '0px' }}>
                    <div className="col-md-3">
                      <button className="btn btn-light" onClick={this.handleLikesClick}>
                        <span className="glyphicon glyphicon-thumbs-up text-primary"></span> Like
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-light" onClick={this.handleEmojiClick}>
                        <span className="glyphicon glyphicon-heart text-danger"></span> Heart
                      </button>
                    </div>
                    {/* <div className="col-md-3">
                      <button className="btn btn-light" onClick={this.handleCommentClick}>
                        <span className="glyphicon glyphicon-comment text-primary"></span> Comment
                      </button>
                      {button}
                      <p>{this.state.commentData}</p>
                    </div> */}
                    <Comment/>
                  </div>
                  <br />
                </div>
                <br />
              </div>
            </div>
          )
        }
        )}
        <StaticPost text="What are the Object Oriented ways of getting money from family? Inheritance" date="1/27/2020, 8:59:59 PM" likes="5 Likes" comment="3 Comment" />
        <StaticPost text="My girl wanted to do some crazy stuff,so, I turned off the heat." date="1/27/2020, 9:50:05 PM" likes="50 Likes" comment="4 Comment" />
        <StaticPost text="Have you wrote 10 lines of code without searching on google?" date="1/27/2020, 10:40:09 PM" likes="15 Likes" comment="3 Comment" />
        <StaticPost text="Sorry Babe, Not Tonight, I'm Coding." date="1/28/2020, 12:00:00 AM" likes="13 Likes" comment="4 Comment" />
        <StaticPost text="Computer Science is just math in disguise." date="1/27/2020, 1:00:00 AM" likes="5 Likes" comment="3 Comment" />

      </React.Fragment>
    );
  }
}
export default Posts;