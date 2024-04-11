import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <div>
        <div
          className="card mt-4 mx-4"
          style={{ width: "30vw", height: "30rem", overflow: "hidden" }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbchNcdr6ctchmU3pIIrXWmEI7MtBeQ_6cMkGWkr5dw&s"
            className="card-img-top"
            width={"15px"}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
