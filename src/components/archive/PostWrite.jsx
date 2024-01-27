import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const PostWrite = () => {
    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: '',
        contents: '',
    });
    
    const { title, contents } = post;

    const onChange = (event) => {
        const {value, name} = event.target;
    }

  return (
    <div>PostWrite</div>
  )
}

export default PostWrite