import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export class News extends Component {
  state = {
    news: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/wp-json/wp/v2/news")
      .then((res) =>
        this.setState({
          news: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { news, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {news.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}

export default News;
