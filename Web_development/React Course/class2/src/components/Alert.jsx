import React from "react";

const Alert = (props) => {
  return (
    props.aboutTxt && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>
          {props.aboutTxt.state}
          {" :"}
          {props.aboutTxt.message}
        </strong>
        )}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
};

export default Alert;
