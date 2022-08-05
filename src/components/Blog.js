import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";



export default function Blog (){

  const [blogs, setBlogs] = React.useState([]);
 
 // This method fetches the records from the database.
 React.useEffect(() => {
   async function getBlogs() {
     const response = await fetch(`http://localhost:5000/blogs/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const blogs = await response.json();
     setBlogs(blogs);
   }
 
   getBlogs();

   return;
  }, [blogs.length]);

  const blogComponents = blogs.map((blog => {
    return (
      
        <div className="blog-post">
          <div className="img-box">
            <img src={require("../images/blog-img.jpg")} alt="" className="blog-img" />
          </div>
          <div className="blog-content-box">
            <Link to={`/blog/${blog._id}`}>
              <h3 className="blog-post-title">{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-post-body">{blog.body.slice(0,230)}...
              </p>
              <div className="read-more"><Button variant="outlined">read more</Button></div>
            </ Link>
          </div>
        </div>
      
    )
  }))

  return (
    <div className="blog-container">
      <h1 className="picker-header">Blog</h1>
      {blogComponents}
    </div>
  )
}