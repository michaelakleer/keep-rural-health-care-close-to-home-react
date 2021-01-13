import React, { Component } from "react";
import ArchiveItem from "./ArchiveItem";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Archive.css";

export class Archive extends Component {
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
    console.log(this.state);
    const { news, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="Archive">
          <Link to="/" className="return">
            Go Back
          </Link>
          <hr />
          <h1>Archive</h1>
          {news.map((news) => (
            <ArchiveItem key={news.id} news={news} />
          ))}
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}

export default Archive;
