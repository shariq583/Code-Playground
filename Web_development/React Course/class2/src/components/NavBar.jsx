import React from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = (props) => {
  const change = (event) => {
    const colorVal = event.target.value;
    props.costumeTheme(colorVal); // Call the callback function with the color value
  };

  return (
    <div id="navBar">
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary navbar bg-primary `}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid ">
          <a className="navbar-brand px-3" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  {props.aboutTxt}
                </a>
              </li>
            </ul>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={props.color} // Bind the value to the color prop
              onChange={change} // Call the change function on color change
            />
            <button
              className="btn btn-primary"
              id="themeBtn"
              onClick={props.changeFunc}
            >
              <i className={`${props.btnStyle}`}></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string,
  costumeTheme: PropTypes.func.isRequired, // Define the prop type for the callback function
  color: PropTypes.string.isRequired, // Define the prop type for the color
};

NavBar.defaultProps = {
  title: "Temp Title",
  aboutTxt: "Temp About",
};

export default NavBar;
