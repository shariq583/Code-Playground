import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div
          className="card mt-4 mx-4"
          style={{ width: "18rem", overflow: "hidden", minHeight: "20vw" }}
        >
          <img
            src={imgUrl}
            className="card-img-top cardImg"
            alt="No Picture Found!"
            width={"15vw"}
            style={{
              minHeight: "11vw",
              maxHeight: "10vw",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{ minHeight: "5vw" }}>
              {desc === null ? "No Description!" : desc}
            </p>
            <a
              href={newsUrl}
              className="btn btn-primary btn-sm"
              target="_blank"
            >
              Get Details!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
