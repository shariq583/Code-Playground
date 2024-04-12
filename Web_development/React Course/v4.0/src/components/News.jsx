import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="d-flex flex-row ">
          <NewsItem
            title="Some title"
            desc="Some description"
            imgUrl="https://cdn.vox-cdn.com/thumbor/Ll37ZgQZ1HePIrXxvnCUUdaCPMM=/0x0:2040x1360/1200x628/filters:focal(1015x801:1016x802)/cdn.vox-cdn.com/uploads/chorus_asset/file/25052488/236896_MacBook_Pro_14_and_16_M3_AKrales_0098.jpg"
          />
          <NewsItem />
          <NewsItem />
        </div>
        <div className="d-flex flex-row ">
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    );
  }
}

export default News;
