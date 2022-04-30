
import { Link, List, Paper, Button } from '@mui/material';
import { Box } from '@mui/system';

import React, { useState, useEffect } from 'react'
import AddComment from './AddComment';
import PostDataService from "./PostService"
import { useNavigate } from 'react-router-dom';

// import { Button } from 'bootstrap';



const AllPost = () => {
    const [posts, setPost] = useState([]);
    const [likesCount, setLikesCount] = useState([]);

    useEffect(() => {
      PostDataService.getAll()  
            .then(response => {
                console.log(response);
                const myPost = response.data;
                setPost(myPost)
               
                });
    }, []);

    const postIdWithNavigate = post_id =>{
      navigate(`/Add_comment/${post_id}`);
    }

    const viewCommentsNavigate = post_id => {
      navigate(`/view_comments/${post_id}`)
    }

    
      const likePost = post_id => {
        console.log("hello", post_id);
        PostDataService.like(post_id)
        .then(response => {
          console.log(response);
        })
      }
      
      const navigate = useNavigate()

    return(
        <div className="list-group"> 
          {posts.map((post) => (           
            <Paper>
              <List key={post.id}>
                <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.09)'}} className="list-group-item">
                  <h4 className="list-group-item-heading">{post.title}</h4>
                  <p className="list-group-item-text">{post.description}</p>
                  
                  <Button variant="contained" className='me-2' onClick={() => likePost(post.id)}>Like {post.likes.length}</Button>
                  <Button variant="contained"  onClick={() => {postIdWithNavigate(post.id)}}>Add Comment</Button>
                  <Button variant="text" onClick={() => {viewCommentsNavigate(post.id)}}>View Comments</Button>

                </Box>
              </List>
            </Paper>
          ))}
        </div>
    )
    
}
export default AllPost;



