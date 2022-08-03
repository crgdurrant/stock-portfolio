import React from "react";
import { useParams } from "react-router-dom";

export default function SingleBlogPost(){

  const { id } = useParams()

  return (
    <div className="blog-post">
        <div className="img-box">
          <img src={require("../images/blog-img.jpg")} alt="" className="blog-img" />
        </div>
        <div className="blog-content-box">
          <h3 className="blog-post-title">How many shares should I have in my stock portfolio?</h3>
          <p className="blog-date">02 August 2022</p>
          <p className="blog-post-body">The research shows that the optimal number of shares one should have in their portfolio is 
            between 4 and 10. Too few shares is too risky.
          </p>
          <p className="read-more"><a href="#">read more...</a></p>
        </div>
      </div>
  )
}