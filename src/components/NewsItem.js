import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export class NewsItem extends Component {
  state = {
    imgUrl: "",
    auther: "",
    isLoaded: false,
  };

  static propTypes = {
    news: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { featured_media, author } = this.props.news;
    const getImageUrl = axios.get(
      `http://localhost:8000/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `http://localhost:8000/wp-json/wp/v2/users/${author}`
    );

    Promise.all([getImageUrl, getAuthor]).then((res) => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
      });
    });
  }

  render() {
    const { id, title, excerpt } = this.props.news;
    const { author, imgUrl, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <h2 style={{ marginBottom: "0" }}>{title.rendered}</h2>
          <small>
            Posted by <strong>{author}</strong>
          </small>
          <img style={{ width: "100%" }} src={imgUrl} alt={title.rendered} />
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
          <Link to={`/news/${id}`}>News Article</Link>
          <hr />
        </div>
      );
    }

    return null;
  }
}

export default NewsItem;
