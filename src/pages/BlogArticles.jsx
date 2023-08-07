import React from "react";
import "../styles/BlogArticles.css";
import cableImage from "../assests/cable-int.png"; // Import the image file

const BlogArticles = () => {
  return (
    <div className="container">
      <div className="blogContent">
        <h2 className="title">BLOGS & ARTICLES</h2>
        <h2 className="heading">Find Perfect Network Solutions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
          tortor lorem, quis tempor felis commodo vel.
        </p>
      </div>
      <div className="cards-container">
        <div className="card-1">
          <div className="img-1">
            <img src={cableImage} alt="" />
          </div>
          <div className="card-content">
            <h2 className="card-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
              vulputate augue. Fusce nisi risus, ornare
            </p>
            <div className="readmore">
              <button className="btn-blog">Read More » </button>
            </div>
          </div>
        </div>
        <div className="card-1">
          <div className="img-1">
            <img src={cableImage} alt="" />
          </div>
          <div className="card-content">
            <h2 className="card-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
              vulputate augue. Fusce nisi risus, ornare
            </p>
            <div className="readmore">
              <button className="btn-blog">Read More » </button>
            </div>
          </div>
        </div>
        <div className="card-1">
          <div className="img-1">
            <img src={cableImage} alt="" />
          </div>
          <div className="card-content">
            <h2 className="card-heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
              vulputate augue. Fusce nisi risus, ornare
            </p>
            <div className="readmore">
              <button className="btn-blog">Read More » </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
