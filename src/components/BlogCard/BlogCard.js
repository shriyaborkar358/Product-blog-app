import React, { useState } from "react";
import "./BlogCard.css";
import ImgHeartUnfilled from "./heart-unfilled.png";
import ImgHeartFilled from "./heart-filled.png";
import { Link } from "react-router-dom";

function BlogCard({ id, title, image, price, discount, mrp, rating }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="blog-card">
      <Link to={`/blog/${id}`}>
        <img src={image} alt="Teddyimg" className="teddy-img" />
      </Link>
      <img
        src={liked ? ImgHeartFilled : ImgHeartUnfilled}
        className="like-image "
        alt="Likeicon"
        onClick={() => {
          setLiked(!liked);
        }}
      />
      <p className="blog-title">{title}....</p>
      <p className="product-rating">{rating}</p>
      <div className="product-price-container">
        <b>
          <span className="product-price">RS.{price}</span>
        </b>
        <del>
          <span className="product-price">RS.{mrp}</span>
        </del>
        <b>
          <span className="product-price" style={{ color: "green" }}>
            {discount}
          </span>
        </b>
      </div>
    </div>
  );
}

export default BlogCard;
