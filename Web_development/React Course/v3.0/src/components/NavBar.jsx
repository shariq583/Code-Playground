import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [color, setColor] = useState(""); // State to hold color value

  const changeColor = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor); // Update color state
    props.colorFunc(selectedColor); // Invoke colorFunc prop with selected color
  };

  return (
    <div id="navBar">
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary`}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand px-3" to="/">
            {props.title}
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutTxt}
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-primary"
              id="themeBtn"
              onClick={props.changeFunc}
            >
              <i className={`${props.btnStyle}`}></i>
            </button>
          </div>
        </div>
        <input
          type="color"
          id="favcolor"
          name="favcolor"
          defaultValue="#808080"
          value={color}
          onChange={(e) => changeColor(e)}
        ></input>
        <label htmlFor="favcolor">Choose a dark color</label>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string,
  mode: PropTypes.string.isRequired,
  btnStyle: PropTypes.string.isRequired,
  changeFunc: PropTypes.func.isRequired,
  colorFunc: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  title: "Temp Title",
  aboutTxt: "Temp About",
};

export default NavBar;
