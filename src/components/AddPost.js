import { Box, Container, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostDataService from "./PostService"

const AddPost = () => {
    const initialPostState = {
        id: null,
        title: "",
        description: ""
    };

    const [myPost, setMyPost] = useState(initialPostState);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = event => {
    const { name, value } = event.target;
      setMyPost({ ...myPost, [name]: value });
    };

    const savePost = () => {
        var post = {
        title: myPost.title,
        description: myPost.description
    };
    console.log(post)
    PostDataService.create(post)
      .then(response => {
        setMyPost({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };
    const newPost = () => {
      setMyPost(initialPostState);
        setSubmitted(false);
    };
    const navigate = useNavigate()
    return (
        <Box className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newPost}>
              Add Post
            </button>
          </div>
        ) : (
          <Container sx={{display: 'flex', flexDirection: 'column', height:'35%', width: '25%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '20%', left: '40%', backgroundColor:'rgba(0, 0, 0, 0.09)'}}>
            <form>
            <h2 className="mb-4">Add Post</h2>

              <Box className="input-container" sx={{mb: '2rem'}}>
                <label htmlFor="title">Title</label>
                <Input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={setMyPost.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </Box>
              <Box className="input-container" sx={{mb: '2rem'}}>
                <label htmlFor="description">Description</label>
                <Input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={setMyPost.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </Box>
              <button onClick={savePost} className="btn btn-success">
                Submit
              </button>
            </form>
          </Container>
          
        )}
      </Box>
  
        
    )

};

export default AddPost;