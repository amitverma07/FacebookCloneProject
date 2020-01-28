import React from 'react';

function Images(props) {
  return (<img src="./facebooklogo.PNG" style={props.style} alt="logoimage" />);
}

function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4267b2' }}>
        <a className="navbar-brand" href="#home" style={{ marginBottom: '15px' }}>
          <Images style={{ width: '30px', height: '30px', backgroundColor: '#fff' }} />
        </a>

        <form className="form-inline" >
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '900px' }} />
          <button className="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Search</button>
        </form>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link font-weight-bold" href="#hh" style={{ color: '#fff' }}>
                <img src="./amit.jpg" className="rounded-circle" alt="images" style={{ width: '22px', marginRight: '7px' }} />
                Amit
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold pl-5" href="#h" style={{ color: '#fff' }}>Home</a>
            </li>
          </ul>
          <button className="btn btn-lg mt-2"><span className="glyphicon glyphicon-triangle-bottom"></span></button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Header