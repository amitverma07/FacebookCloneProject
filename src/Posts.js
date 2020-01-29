import React, { Component } from 'react'
import StaticPost from './StaticPost';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.type.map(elem => {
          return (
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div style={{ fontSize: "14px", color: "gray" }}>
                      <img src="./amit.jpg" alt="postimg" className="rounded-circle"
                        style={{ width: '40px', marginRight: '4px' }} />
                      <a href="#h"><b>Amit Verma</b></a>
                      <p>{this.state.date}</p>
                    </div>
                    {elem}
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ marginRight: '24px' }}>1 Comment 13 Likes</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row" style={{ marginLeft: '0px' }}>
                    <div className="col-md-3">
                      <button className="btn btn-light">
                        <span className="glyphicon glyphicon-thumbs-up text-primary"></span> Like
                </button>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-light">
                        <span className="glyphicon glyphicon-comment text-primary"></span> Comment
                </button>
                    </div>
                  </div>
                  <br />
                </div>
                <br />
              </div>
            </div>
          )
        }
        )}
        <StaticPost text = "What are the Object Oriented ways of getting money from family? Inheritance" date="1/27/2020, 8:59:59 PM" likes="5 Likes" comment="3 Comment"/>
        <StaticPost text = "My girl wanted to do some crazy stuff,so, I turned off the heat." date="1/27/2020, 9:50:05 PM" likes="50 Likes" comment="4 Comment"/>
        <StaticPost text = "Have you wrote 10 lines of code without searching on google?" date="1/27/2020, 10:40:09 PM" likes="15 Likes" comment="3 Comment"/>
        <StaticPost text = "Sorry Babe, Not Tonight, I'm Coding." date="1/28/2020, 12:00:00 AM" likes="13 Likes" comment="4 Comment"/>
        <StaticPost text = "Computer Science is just math in disguise." date="1/27/2020, 1:00:00 AM" likes="5 Likes" comment="3 Comment"/>
      </React.Fragment>
    );
  }
}
export default Posts;