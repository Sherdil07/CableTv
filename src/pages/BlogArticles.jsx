import React, { useEffect } from "react";
import "../styles/BlogArticles.css";
import Card1 from "..//assests/card-1.png";
import Card2 from "..//assests/card-2.png";
import Card3 from "..//assests/card-3.png";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch

const BlogArticles = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const Card1img = pageData?.Home?.blog_card_1?.image;
  const Card1imgUrl = Card1img || "Loading...";

  const Card2img = pageData?.Home?.blog_card_2?.image;
  const Card2imgUrl = Card2img || "Loading...";

  const Card3img = pageData?.Home?.blog_card_3?.image;
  const Card3imgUrl = Card3img || "Loading...";

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);
  return (
    <div className="BlogContainer">
      <div className="blogContent">
        <h2 className="title">{pageData?.Home?.blogs?.title}</h2>
        <h2 className="heading">{pageData?.Home?.blogs?.heading}</h2>
        <p>{pageData?.Home?.blogs?.description} </p>
      </div>
      <div className="cards-app-container">
        <div className="card-1">
          <div className="ImageBox">
            <div className="img-1">
              <img src={Card1imgUrl} alt="" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-heading">
              {pageData?.Home?.blog_card_1?.heading}
            </h2>
            <p>{pageData?.Home?.blog_card_1?.description} </p>
            <div className="readmore">
              <button className="btn-blog">Read More » </button>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div className="ImageBox">
            <div className="img-1">
              <img src={Card2imgUrl} alt="" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-heading">
              {pageData?.Home?.blog_card_2?.heading}
            </h2>

            <p>{pageData?.Home?.blog_card_2?.description} </p>

            <div className="readmore">
              <button className="btn-blog">Read More » </button>
            </div>
          </div>
        </div>
        <div className="card-3">
          <div className="ImageBox">
            <div className="img-1">
              <img src={Card3imgUrl} alt="" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="card-heading">
              {pageData?.Home?.blog_card_3?.heading}
            </h2>
            <p>{pageData?.Home?.blog_card_3?.description} </p>

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
