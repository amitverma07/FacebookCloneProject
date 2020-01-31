import React from 'react'
import Comment from './Comment'

//Creates posts by getting data as props from posts.js
function StaticPost(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div style={{ fontSize: "14px", color: "gray" }}>
                <img src="https://i.pravatar.cc/300" alt="postimg" className="rounded-circle"
                  style={{ width: '40px', marginRight: '4px' }} />
                <a href="#h"><b>{props.dName}</b></a>
                <p>{props.date}</p>
              </div>
              {props.text}
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <div style={{ textAlign: 'right' }}>
                  <span style={{ marginRight: '24px' }}>{props.comment} Heart {props.likes} Likes</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="row" style={{ marginLeft: '0px' }}>
              <div className="col-md-3">
                <button className="btn btn-light" onClick={props.likeclick}>
                  <span className="glyphicon glyphicon-thumbs-up text-primary"></span> Like
                </button>
              </div>
              <div className="col-md-3">
                <button className="btn btn-light" onClick={props.emojiFun}>
                  <span className="glyphicon glyphicon-heart text-primary"></span> Heart
                </button>
              </div>
              <Comment userNames={props.userNames} />
            </div>
            <br />
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
export default StaticPost;