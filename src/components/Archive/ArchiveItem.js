import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ArchiveItem.css";

export class ArchiveItem extends Component {
  state = {
    imgUrl: "",
    author: "",
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
    const { author, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="ArchiveItem">
          <div className="posts">
            <h2>{title.rendered}</h2>
            <small>
              Posted by <strong>{author}</strong>
            </small>
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
            />
            <Link to={`/news/${id}`}>Read more</Link>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default ArchiveItem;
