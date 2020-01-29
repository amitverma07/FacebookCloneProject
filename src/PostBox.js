import React, { Component } from 'react'
import Posts from './Posts'

class PostBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: []
      
      items: [
      // {
      //   "id": 1,
      // },
      // {
      //   "id": 2,
      // },
      // {
      //   "id": 3,
      // },
      // {
      //   "id": 4,
      // },
      // {
      //   "id": 5,
      // },
      // {
      //   "id": 6,
      // },
      // {
      //   "id": 7,
      // }
    ],
    term: "",
    };
    //creating ref
    // this.textInput = React.createRef();
  }

  handleChange = (e) => {
    this.setState({ term: e.target.value });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.textInput.current.value);
  //   this.setState({value:this.textInput.current.value})
  // }

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
          <div class="d-flex justify-content-center">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <b>Create Post</b>
                    </div>
                    <div className="row">
                      <div className="col-md-2" style={{ textAlign: 'right' }}>
                        <img src="./amit.jpg" alt="postimg" className="rounded-circle" style={{ width: '44px', marginTop: '10px' }} />
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
              <Posts type={this.state.items}/>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
export default PostBox;