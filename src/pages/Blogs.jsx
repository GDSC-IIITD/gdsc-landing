import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import client from "../client";

function Blogs() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
  }, [])


  return (
    <>
      
    </>
  )
}

export default Blogs