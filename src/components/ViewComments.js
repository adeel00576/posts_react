import { List, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDataService from "./PostService";

const ViewComments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    PostDataService.getComments(id).then((response) => {
      console.log(response);
      const myComment = response.data;
      console.log("response", response.data);
      setComments(myComment);
    });
  }, []);

  return <div className="list-group">
      
      {
      comments.length? (
        comments.map((comment) => (
            <Paper>
              <List key={comment.id}>
                <Box
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.09)" }}
                  className="list-group-item"
                >
                  <h4 className="list-group-item-heading">{comment.content}</h4>
                </Box>
              </List>
            </Paper>
          ))

      ):
      (
        <h1>No Comments Yet </h1>
      )
      }
      
      </div>;
};

export default ViewComments;



/**{comments.map((comment) => (
        <Paper>
          <List key={comment.id}>
            <Box
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.09)" }}
              className="list-group-item"
            >
              <h4 className="list-group-item-heading">{comment.content}</h4>
            </Box>
          </List>
        </Paper>
      ))} */