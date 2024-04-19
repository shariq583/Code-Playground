import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  article = [];
  constructor() {
    super();
    this.state = {
      article: this.article,
    };
  }

  async componentDidMount() {
    let endpoint =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a4ece348d504c7c9f16781fb19c222b";
    let result = await fetch(endpoint);
    let resultJson = await result.json();
    this.setState({
      article: resultJson.articles,
    });
  }
  render() {
    return (
      <div className="news ">
        <h2>Get The News!</h2>
        <h4 className="mx-3">
          Total Articles Found:{this.state.article.length}
        </h4>
        <div className="row">
          {this.state.article.map((e) => {
            return (
              <div className="col md-4">
                <NewsItem
                  title={e.title.slice(0, 45) + "..."}
                  desc={e.description && e.description.slice(0, 88) + "..."}
                  imgUrl={e.urlToImage}
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
