import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar } from "@mui/material";
import CraigAvatar from "../images/craig.jpg"

export default function SingleBlogFull(){

  const { id } = useParams()

  const [singleBlog, setSingleBlog] = React.useState([]);
 
 // This method fetches the records from the database.
  React.useEffect(() => {
    async function getSingleBlog() {
      const response = await fetch(`http://localhost:5000/blogs/${id}`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const blog = await response.json();
      setSingleBlog(blog)
    }
  
    getSingleBlog();
    
  
    return;
  }, []);

  


  return (
    <div className="full-post-page">
      <Link to={"/blog"}><div className="back-btn"><ArrowBackIosIcon/><h1 className="picker-header">Back to Posts</h1></div></Link>
      <div className="full-post-container">
        <div className="inner-post-container">
          <h1>{singleBlog.title}</h1>
          <p>{singleBlog.date}</p>
          <p style={{whiteSpace: "pre-wrap"}}>{singleBlog.body}</p>
          <div className="author-info"><Avatar sx={{ width: 80, height: 80 }} alt={singleBlog.author} src={CraigAvatar} />Craig is a front-end developer with an interest in financial markets, investments and all things finance related.</div>
        </div>
      </div>

    </div>
  )
}