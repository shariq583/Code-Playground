import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgUrl } = this.props;
    return (
      <div>
        <div
          className="card mt-4 mx-4"
          style={{ width: "30vw", height: "30rem", overflow: "hidden" }}
        >
          <img src={imgUrl} className="card-img-top" width={"15px"} alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{desc}</p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
