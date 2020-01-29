import React from 'react'

function StaticPost(props) {
  return(
    <>
    <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div style={{ fontSize: "14px", color: "gray" }}>
                  <img src="./amit.jpg" alt="postimg" className="rounded-circle"
                    style={{ width: '40px', marginRight: '4px' }} />
                  <a href="#h"><b>Amit Verma</b></a>
                  <p>{props.date}</p>
                </div>
                {props.text}
                </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div style={{ textAlign: 'right' }}>
  <span style={{ marginRight: '24px' }}>{props.comment} {props.likes}</span>
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
    </>
  );
}
export default StaticPost;