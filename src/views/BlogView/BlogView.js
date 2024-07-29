import React, { useState } from "react";
import "./BlogView.css";
import { useParams } from "react-router-dom";
import blogs from "../../data";
import ImgHeartUnfilled from "../../components/BlogCard/heart-unfilled.png";
import ImgHeartFilled from "../../components/BlogCard/heart-filled.png";

function BlogView() {
  const [liked, setLiked] = useState(false);
  const { id } = useParams();

  const selectedData = blogs.find((blogObject) => blogObject.id === id);

  return (
    <div className="product-card-container">
      <div className="product-image">
        <img src={selectedData.image} alt="Productimg" />
        <img
          src={liked ? ImgHeartFilled : ImgHeartUnfilled}
          className="like-image "
          alt="Likeicon"
          onClick={() => {
            setLiked(!liked);
          }}
        />
        <div className="product-btn-container">
          <button className="product-btn">Add To Cart</button>
          <button className="product-btn">Buy Now</button>
        </div>
      </div>
      <div>
        <h2 className="blog-title-1">{selectedData.title}</h2>
        <p className="product-rating-1">{selectedData.rating}</p>
        <p style={{ color: "green", fontSize: "25px", marginLeft: "20px" }}>
          Special Price
        </p>
        <div className="product-price-container-1">
          <b>
            <span className="product-price-1">RS.{selectedData.price}</span>
          </b>
          <del>
            <span className="product-price-1">RS.{selectedData.mrp}</span>
          </del>
          <b>
            <span className="product-price-1" style={{ color: "green" }}>
              {selectedData.discount}
            </span>
          </b>
        </div>
        <p style={{ color: "green", fontSize: "25px", marginLeft: "20px" }}>
          About Item :
        </p>
        <ul className="product-description">
          {selectedData.description.length > 1 ? (
            selectedData.description.map((element, i) => (
              <li className="" key={i}>
                {element}
              </li>
            ))
          ) : (
            <p>No element available.</p>
          )}
        </ul>

        <p style={{ color: "green", fontSize: "25px", marginLeft: "20px" }}>
          Available Offers :
        </p>
        <ul className="product-description">
          {selectedData.offers.length > 1 ? (
            selectedData.offers.map((element, i) => (
              <li className="" key={i}>
                {element}
              </li>
            ))
          ) : (
            <p>No element available.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default BlogView;
