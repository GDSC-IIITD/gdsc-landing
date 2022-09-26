import React,{useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom"
import client from "../client";
import BlockContent from '@sanity/block-content-to-react'

function Post() {
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams();
    useEffect(() => {
        client
          .fetch(
            `*[slug.current == "${slug}"] {
            title,
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
          .then((data) => setSinglePost(data[0]))
        setIsLoading(false)
      }, [slug])

  return (
    <>
        {isLoading ? (<h1 > Loading...</h1>) :
        (<></>)}
    </>
  )
}

export default Post