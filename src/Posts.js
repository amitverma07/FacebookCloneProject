import React, { Component } from 'react';
import StaticPost from './StaticPost';
import Comment from './Comment'

class Posts extends Component {
  render() {
    const uname = this.props.userName;
    return (
      <React.Fragment>
        {this.props.type.map(elem => {
          console.log(this.props.key);
          return (
            <div key={this.props.key} className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div style={{ fontSize: "14px", color: "gray" }}>
                      <img src="https://i.pravatar.cc/300" alt="postimg" className="rounded-circle"
                        style={{ width: '40px', marginRight: '4px' }} />
                      <a href="#h"><b>{uname}</b></a>
                      <p>{new Date().toLocaleString()}</p>
                    </div>
                    {elem}
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ marginRight: '24px' }}>{this.props.heartCount} Heart {this.props.likeCount} Like</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row" style={{ marginLeft: '0px' }}>
                    <div className="col-md-3">
                      <button className="btn btn-light" onClick={this.props.likeFun}>
                        <span className="glyphicon glyphicon-thumbs-up text-primary"></span> Like
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-light" onClick={this.props.emojiClick}>
                        <span className="glyphicon glyphicon-heart text-danger"></span> Heart
                      </button>
                    </div>
                    <Comment userNames={uname} />
                  </div>
                  <br />
                </div>
                <br />
              </div>
            </div>
          )
        }
        )}
        <StaticPost text="What are the Object Oriented ways of getting money from family? Inheritance" date="1/27/2020, 8:59:59 PM" likes={this.props.likeCount} comment={this.props.heartCount} likeclick={this.props.likeFun} emojiFun={this.props.emojiClick} userNames={uname} dName="Amit Verma" />
        <StaticPost text="My girl wanted to do some crazy stuff,so, I turned off the heat." date="1/27/2020, 9:50:05 PM" likes={this.props.likeCount} comment={this.props.heartCount} likeclick={this.props.likeFun} emojiFun={this.props.emojiClick} userNames={uname} dName="Dhruv" />
        <StaticPost text="Have you wrote 10 lines of code without searching on google?" date="1/27/2020, 10:40:09 PM" likes={this.props.likeCount} comment={this.props.heartCount} likeclick={this.props.likeFun} emojiFun={this.props.emojiClick} userNames={uname} dName="Jawad" />
        <StaticPost text="Sorry Babe, Not Tonight, I'm Coding." date="1/28/2020, 12:00:00 AM" likes={this.props.likeCount} comment={this.props.heartCount} likeclick={this.props.likeFun} emojiFun={this.props.emojiClick} userNames={uname} dName="Jasmeet" />
        <StaticPost text="Computer Science is just math in disguise." date="1/27/2020, 1:00:00 AM" likes={this.props.likeCount} comment={this.props.heartCount} likeclick={this.props.likeFun} emojiFun={this.props.emojiClick} userNames={uname} dName="Christian" />

      </React.Fragment>
    );
  }
}
export default Posts;