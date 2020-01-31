import React, { Component } from 'react'
import Posts from './Posts'
import Selector from './Selector';

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      term: "",
      users: [
        { name: "Amit Verma", id: 1 },
        { name: "Dhruv", id: 2 },
        { name: "Jawad", id: 3 },
        { name: "Jasmeet", id: 4 },
        { name: "Christian", id: 5 },
      ],
      whoIsPosting: ''
    };
  }

  currentUser = (input) => {
    console.log(input)
    this.setState({ whoIsPosting: input })
  }

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term],
    });
    document.getElementById("form").reset();

  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-6">
              <div className="row">
                <Selector usersData={this.state.users} whichUser={this.currentUser} />
                <br />
                <br />
                <br />
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <b>Create Post</b>
                    </div>
                    <div className="row">
                      <div className="col-md-2" style={{ textAlign: 'right' }}>
                        <img src="https://i.pravatar.cc/300" alt="postimg" className="rounded-circle" style={{ width: '44px', marginTop: '10px' }} />
                      </div>
                      <div className="col-md-10">
                        <form onSubmit={this.handleSubmit} id="form">
                          <textarea className="form-control" onChange={this.handleChange} placeholder="What's on your mind, Amit?">
                          </textarea>
                          <div className="col-md-2 ml-5">
                            <button className="btn btn-primary mt-1" style={{ marginLeft: '300px', marginBottom: '-15px' }} type="submit" value="Submit">
                              Post
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <hr />
                    <div className="row" style={{ marginLeft: '0px' }}>
                      <div className="col-md-3">
                        <button className="btn btn-light">
                          <span className="glyphicon glyphicon-picture text-success"></span> Photo/video
                  </button>
                      </div>
                      <div className="col-md-3">
                        <button className="btn btn-light">
                          <span className="glyphicon glyphicon-user text-primary"></span> Tag Friends
                  </button>
                      </div>
                      <div className="col-md-3">
                        <button className="btn btn-light">
                          <span className="glyphicon glyphicon-heart text-danger"></span> Feeling
                  </button>
                      </div>
                      <div className="col-md-3">
                        <button className="btn btn-light">
                          <span className="glyphicon glyphicon-map-marker text-danger"></span> Check In
                  </button>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <Posts type={this.state.items} userName={this.state.whoIsPosting}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PostBox;