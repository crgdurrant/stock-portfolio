import React from "react";
import { TextField } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core";
import {FormGroup, FormControlLabel, Switch} from "@material-ui/core";
import PhotoCamera from '@mui/icons-material/PhotoCamera';



export default function Admin(){

  
  function getDate(){
    const date = new Date()
    let dateString = date.toGMTString().slice(5,16)
    console.log(dateString)
    return dateString
  }

  const dateStr = getDate()
  
  const [postSwitch, setPostSwitch] = React.useState(false)

  const [postContent, setPostContent] = React.useState({
    title: "",
    content: "",
    author: "",
    date: {dateStr},
    draft: false
  })

  const toggleSwitch = () => {
    setPostSwitch(prev => !prev)
    setPostContent({
      ...postContent,
      draft: {postSwitch}
    })
    console.log(postContent)
  }

  function handleChange(event){
    const value = event.target.value
    
    setPostContent({
      ...postContent,
      [event.target.name]: value
    })
  }

  

  async function onSubmit(e){
    e.preventDefault();

    const newBlog = {...postContent}
    console.log(newBlog)

    await fetch("http://localhost:5000/blogs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlog)
    })
    .catch(error => {
      window.alert(error)
      return
    })
    setPostContent({ title: "", content: "", author: "", date: {dateStr} });
    }


  return (
    <div className="admin-page">
      <h1 className="picker-header">Add Blog Post:</h1>
      <div className="admin-container">
        <TextField style={{marginBottom: 20}}
         name="title" id="outlined-name" label="Title" variant="outlined" value={postContent.title} onChange={handleChange} />
        <TextField style={{marginBottom: 20}} name="content"  id="outlined-multiline-static" label="Body" variant="outlined" multiline minRows={8} value={postContent.content} onChange={handleChange} />
        <TextField style={{marginBottom: 10}} name="author" id="outlined-name" label="Author" variant="outlined" value={postContent.author} onChange={handleChange} />
        <FormGroup>
          <FormControlLabel
            control={<Switch size="small" checked={postSwitch} onChange={toggleSwitch} />}
            label={`Post saving ${postSwitch? 'live':'as a draft'}`}
          />
        </FormGroup>
        <IconButton style={{width: 10, height: 10, marginBottom: 10 }} color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        
        <div className="button-container">
          <Button variant="contained">Save Draft</Button>
          <Button onClick={onSubmit} variant="contained">Post Blog</Button>
        </div>
      </div>
    </div>
  )
}