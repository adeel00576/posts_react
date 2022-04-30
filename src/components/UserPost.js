import { Box } from '@mui/material'
import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react'
import { useNavigate } from 'react-router-dom';

function UserPost() {
  const navigate = useNavigate()

  return (
    <div className="list-group"> 
        <Box href="#" className="list-group-item">
        <h4 className="list-group-item-heading">List group item heading</h4>
        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </Box>
        <Box href="#" className="list-group-item">
        <h4 className="list-group-item-heading">List group item heading</h4>
        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </Box> 
        <Box href="#" className="list-group-item">
        <h4 className="list-group-item-heading">List group item heading</h4>
        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        </Box> 
        <button>
        <button onClick={() => navigate("/add_post")}>
          Go Home
        </button>
        </button>
    </div>
  )
}

export default UserPost