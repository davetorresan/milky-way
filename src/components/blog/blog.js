import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


const Blog = () => {

  useEffect(()=>{
    document.title = "Blog - Milky Way"
  }, [])

  return(
    <p></p>
  )
}

export default Blog;
