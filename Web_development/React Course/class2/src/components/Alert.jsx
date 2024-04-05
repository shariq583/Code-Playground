import React from "react";

const Alert = (props) => {
  return (
    props.aboutTxt && (
      <div
        className={`alert alert-${props.aboutTxt.state.toLowerCase()} alert-dismissible fade show`}
        role="alert"
      >
        <strong>
          {props.aboutTxt.state}
          {" :"}
          {props.aboutTxt.message}
        </strong>
      </div>
    )
  );
};

export default Alert;
