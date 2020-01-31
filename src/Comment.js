import React, { Component } from 'react'

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleComment: false,
      commentPosts: '',
      commentData: [],
    }
  }

    handleCommentClick = () => {
      this.setState({ toggleComment: true });
    }

    handleCommentSubmit = (e) => {
      e.preventDefault();
      this.setState({ commentData: this.state.commentPosts });
      document.getElementById("resets").reset();
    }

    handleChanges = (e) => {
      this.setState({ commentPosts: e.target.value });
    }

    render() {
      const toggleComments = this.state.toggleComment;
      let button;
      if (toggleComments) {
        button = <form id="resets">
          <input type="text" onChange={this.handleChanges} className="form-control mt-3 mb-0" style={{ minWidth: "525px", marginLeft: "-16px" }}></input>
          <button className="btn btn-primary mt-2" style={{ marginLeft: "400px", marginBottom: "-15px" }} type="button" onClick={this.handleCommentSubmit}>Post</button>
        </form>
      }
      return (
        <div>
          <div className="col-md-3">
            <button className="btn btn-light" onClick={this.handleCommentClick}>
              <span className="glyphicon glyphicon-comment text-primary"></span> Comment
            </button>
            {button}
            <p>{this.state.commentData}</p>
          </div>
        </div>
      )
    }
  }
