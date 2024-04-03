import React from "react";
import PropTypes from "prop-types";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const NavBar = (props) => {
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
                <a className="nav-link px-3" href="/">
                  {props.aboutTxt}
                </a>
              </li>
            </ul>
            <FontAwesomeIcon icon="fa-regular fa-moon" />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string,
};
NavBar.defaultProps = {
  title: "Temp Title",
  aboutTxt: "Temp About",
};
export default NavBar;
