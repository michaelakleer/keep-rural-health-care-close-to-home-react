import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./IndividualNews.css";

export class IndividualNews extends Component {
  state = {
    news: {},
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8000/wp-json/wp/v2/news/${this.props.match.params.id}`
      )
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
        <Fragment>
          <div className="IndividualNews">
            <Link to="/" className="return">
              Go Back
            </Link>
            <hr />
            <div className="newsArticle">
              <h1>{news.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: news.content.rendered }}
              ></div>
              <h4>Author: {news.acf.author}</h4>
            </div>
          </div>
        </Fragment>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default IndividualNews;
