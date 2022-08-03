import React from "react";
import { TextField } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { color } from "@mui/system";
import {
  compose,
  spacing,
  palette,
  styleFunctionSx
} from "@material-ui/system";



export default function Admin(){

  const [postContent, setPostContent] = React.useState({
    title: "",
    body: "",
    author: ""
  })

  function handleChange(event){
    const value = event.target.value
    setPostContent({
      ...postContent,
      [event.target.name]: value
    })
  }

  return (
    <div className="admin-page">
      <h1 className="picker-header">Add Blog Post:</h1>
      <div className="admin-container">
        <TextField style={{marginBottom: 20}}
         name="title" id="outlined-name" label="Title" variant="outlined" value={postContent.title} onChange={handleChange} />
        <TextField style={{marginBottom: 20}} name="body"  id="outlined-multiline-static" label="Body" variant="outlined" multiline minRows={8} value={postContent.body} onChange={handleChange} />
        <TextField name="author" id="outlined-name" label="Author" variant="outlined" value={postContent.author} onChange={handleChange} />
        
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <div className="button-container">
          <Button style={{marginRight: 60}} variant="contained">Post Blog</Button>
          <Button variant="contained">Save Draft</Button>
        </div>
      </div>
    </div>
  )
}