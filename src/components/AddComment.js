import { Container, Input } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PostDataService from "./PostService"


const AddComment = (post_id) => {
    const initialPostCommentState = {
        id: null,
        content: ""
    };
    const { id } = useParams();

    const [myPostComment, setMyPostComment] = useState(initialPostCommentState);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = event => {
    const { name, value } = event.target;
    setMyPostComment({ ...myPostComment, [name]: value });
    };

    const savePost = () => {
        var comment = {
        content: myPostComment.content
        };

    PostDataService.createComment(id, comment)
      .then(response => {
        setMyPostComment({
          id: response.data.id,
          content: response.data.content
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };
    const newPost = () => {
        setMyPostComment(initialPostCommentState);
        setSubmitted(false);
    };


  return (
    <Box className="submit-form">
    {submitted ? (
      <div>
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newPost}>
          Add Comment
        </button>
      </div>
    ) : (
      <Container sx={{display: 'flex', flexDirection: 'column', height:'35%', width: '25%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '20%', left: '40%', backgroundColor:'rgba(0, 0, 0, 0.09)'}}>
        <form>
        <h2 className="mb-4">Add Post</h2>
          <Box className="input-container" sx={{mb: '2rem'}}>
            <label htmlFor="content">Add Comment</label>
            <Input
              type="text"
              className="form-control"
              id="content"
              required
              value={setMyPostComment.content}
              onChange={handleInputChange}
              name="content"
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
  
}

export default AddComment